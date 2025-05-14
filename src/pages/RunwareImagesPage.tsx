import React, { useState } from "react";
import { RunwareImageBrowser } from "@/components/runware/RunwareImageBrowser";
import { SavedRunwareImages } from "@/components/runware/SavedRunwareImages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RunwareImage } from "@/services/RunwareService";
import { motion } from "framer-motion";

interface SelectedImage {
  id: string;
  title: string;
  url: string;
  description: string;
}

export default function RunwareImagesPage() {
  const [selectedTab, setSelectedTab] = useState("browse");
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [showImageDialog, setShowImageDialog] = useState(false);

  const handleSelectImage = (image: RunwareImage | any) => {
    setSelectedImage({
      id: image.id || image.image_id,
      title: image.title,
      url: image.url,
      description: image.description,
    });
    setShowImageDialog(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container py-8"
    >
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Runware Images</h1>
          <p className="text-muted-foreground">
            Browse, search, and save images from the Runware API for use in your projects.
          </p>
        </div>
        
        <Tabs defaultValue="browse" value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browse">Browse Images</TabsTrigger>
            <TabsTrigger value="saved">Saved Images</TabsTrigger>
          </TabsList>
          
          <TabsContent value="browse" className="mt-6">
            <Card className="p-6">
              <RunwareImageBrowser onSelectImage={handleSelectImage} />
            </Card>
          </TabsContent>
          
          <TabsContent value="saved" className="mt-6">
            <Card className="p-6">
              <SavedRunwareImages onSelectImage={handleSelectImage} />
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={showImageDialog} onOpenChange={setShowImageDialog}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>
              {selectedImage?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 overflow-hidden rounded-lg">
            {selectedImage && (
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto object-contain"
              />
            )}
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={() => setShowImageDialog(false)}>
              Close
            </Button>
            <Button onClick={() => window.open(selectedImage?.url, '_blank')}>
              Open Full Size
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}