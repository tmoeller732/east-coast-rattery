import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { searchRunwareImages, saveRunwareImageReference, RunwareImage, RunwareSearchParams } from "@/services/RunwareService";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Search, Image, Tag, Save, CheckCircle } from "lucide-react";

interface RunwareImageBrowserProps {
  onSelectImage?: (image: RunwareImage) => void;
  showSaveButton?: boolean;
}

export function RunwareImageBrowser({
  onSelectImage,
  showSaveButton = true,
}: RunwareImageBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useState<RunwareSearchParams>({
    query: "",
    page: 1,
    limit: 20,
  });
  const [searchResults, setSearchResults] = useState<RunwareImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [savedImageIds, setSavedImageIds] = useState<Set<string>>(new Set());
  
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch images based on search parameters
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await searchRunwareImages(searchParams);
        setSearchResults(response.images);
        setTotalImages(response.totalCount);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch Runware images. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchParams, toast]);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({
      ...searchParams,
      query: searchQuery,
      page: 1, // Reset to first page on new search
    });
  };

  // Handle page navigation
  const handlePageChange = (newPage: number) => {
    setSearchParams({
      ...searchParams,
      page: newPage,
    });
  };

  // Handle image selection
  const handleSelectImage = (image: RunwareImage) => {
    if (onSelectImage) {
      onSelectImage(image);
    }
  };

  // Handle image saving
  const handleSaveImage = async (image: RunwareImage) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to save Runware images.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await saveRunwareImageReference(image, user.ID);
      setSavedImageIds(prev => new Set(prev).add(image.id));
      toast({
        title: "Image Saved",
        description: "The Runware image has been saved to your collection.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Runware Image Browser</h2>
        
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Search for images..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-center">
            <p>Loading images...</p>
          </div>
        </div>
      ) : searchResults.length === 0 ? (
        <div className="text-center py-8">
          <Image className="h-12 w-12 mx-auto opacity-30 mb-2" />
          <p className="text-muted-foreground">No images found. Try a different search term.</p>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground">
            Found {totalImages} images. Showing page {searchParams.page}.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden flex flex-col"
              >
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer relative"
                  style={{ backgroundImage: `url(${image.thumbnailUrl})` }}
                  onClick={() => handleSelectImage(image)}
                >
                  {savedImageIds.has(image.id) && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Saved
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-medium mb-1 line-clamp-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {image.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-auto mb-3">
                    {image.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {image.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{image.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => handleSelectImage(image)}
                    >
                      Select
                    </Button>
                    {showSaveButton && !savedImageIds.has(image.id) && (
                      <Button 
                        variant="outline" 
                        onClick={() => handleSaveImage(image)}
                        disabled={isLoading}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <Button
              variant="outline"
              disabled={searchParams.page <= 1 || isLoading}
              onClick={() => handlePageChange(searchParams.page! - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {searchParams.page} 
            </span>
            <Button
              variant="outline"
              disabled={searchResults.length < searchParams.limit! || isLoading}
              onClick={() => handlePageChange(searchParams.page! + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}