import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getSavedRunwareImages } from "@/services/RunwareService";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Trash2, ExternalLink, ImageOff } from "lucide-react";

interface SavedImage {
  ID: number;
  image_id: string;
  title: string;
  url: string;
  thumbnail_url: string;
  description: string;
  tags: string;
}

interface SavedRunwareImagesProps {
  onSelectImage?: (image: SavedImage) => void;
}

export function SavedRunwareImages({ onSelectImage }: SavedRunwareImagesProps) {
  const [savedImages, setSavedImages] = useState<SavedImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      return;
    }
    
    const fetchSavedImages = async () => {
      setIsLoading(true);
      try {
        const result = await getSavedRunwareImages(user.ID, currentPage);
        setSavedImages(result.images);
        setTotalImages(result.totalCount);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch your saved Runware images.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSavedImages();
  }, [user, currentPage, toast]);

  const handleDeleteImage = async (imageId: number) => {
    if (!user) return;

    setIsLoading(true);
    try {
      const response = await window.ezsite.apis.tableDelete(4516, { ID: imageId });
      
      if (response.error) throw response.error;
      
      // Update the list by removing the deleted image
      setSavedImages(savedImages.filter(img => img.ID !== imageId));
      setTotalImages(prev => prev - 1);
      
      toast({
        title: "Image Removed",
        description: "The image has been removed from your saved collection.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Please log in to view your saved Runware images.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Saved Runware Images</h2>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-center">
            <p>Loading your saved images...</p>
          </div>
        </div>
      ) : savedImages.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <ImageOff className="h-12 w-12 mx-auto opacity-30 mb-3" />
          <p className="text-muted-foreground mb-2">You haven't saved any Runware images yet.</p>
          <p className="text-sm text-muted-foreground">Browse and save images to see them here.</p>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground">
            You have {totalImages} saved images. Showing page {currentPage}.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedImages.map((image) => (
              <Card
                key={image.ID}
                className="overflow-hidden flex flex-col"
              >
                <div 
                  className="h-48 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${image.thumbnail_url})` }}
                  onClick={() => onSelectImage && onSelectImage(image)}
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-medium mb-1 line-clamp-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {image.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-auto mb-3">
                    {image.tags.split(',').slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {image.tags.split(',').length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{image.tags.split(',').length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(image.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDeleteImage(image.ID)}
                      disabled={isLoading}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {totalImages > 20 && (
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outline"
                disabled={currentPage <= 1 || isLoading}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {Math.ceil(totalImages / 20)}
              </span>
              <Button
                variant="outline"
                disabled={currentPage >= Math.ceil(totalImages / 20) || isLoading}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}