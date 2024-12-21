import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { ImageUploadZone } from "@/components/image-tools/ImageUploadZone";

export const ImageCompressContent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }

    if (!selectedFile.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image under 10MB",
        variant: "destructive",
      });
      return;
    }

    setFile(selectedFile);
  };

  const compressImage = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select an image to compress",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      
      // Create a canvas element to compress the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });

      // Calculate new dimensions while maintaining aspect ratio
      let width = img.width;
      let height = img.height;
      const maxDimension = 1200;

      if (width > height && width > maxDimension) {
        height = Math.round((height * maxDimension) / width);
        width = maxDimension;
      } else if (height > maxDimension) {
        width = Math.round((width * maxDimension) / height);
        height = maxDimension;
      }

      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      // Convert to blob with compression
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => resolve(blob as Blob),
          'image/jpeg',
          0.7
        );
      });

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `compressed-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: "Image compressed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to compress image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <ImageUploadZone onFileChange={handleFileChange} />
        
        {file && (
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {file.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full"
              onClick={compressImage}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Compressing Image...
                </>
              ) : (
                "Compress Image"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};