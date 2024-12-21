import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, FileIcon, Download } from "lucide-react";
import { ImageUploadZone } from "@/components/image-tools/ImageUploadZone";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ImageCompressContent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
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

    // Cleanup previous URLs
    cleanupUrls();

    setFile(selectedFile);
    // Create preview URL for the selected image
    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
    setCompressedUrl(null);
    setCompressedSize(null);
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

      // Set compressed size and URL
      setCompressedSize(blob.size);
      const compressedImageUrl = URL.createObjectURL(blob);
      setCompressedUrl(compressedImageUrl);

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

  const handleDownload = () => {
    if (!compressedUrl || !file) return;

    const link = document.createElement('a');
    link.href = compressedUrl;
    link.download = `compressed-${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Cleanup URLs when component unmounts or when file changes
  const cleanupUrls = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (compressedUrl) {
      URL.revokeObjectURL(compressedUrl);
    }
  };

  // Cleanup on component unmount
  React.useEffect(() => {
    return () => {
      cleanupUrls();
    };
  }, []);

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <ImageUploadZone onFileChange={handleFileChange} />
        
        {file && (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FileIcon className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {file.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Original size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                    {compressedSize && (
                      <p className="text-sm text-muted-foreground">
                        Compressed size: {(compressedSize / (1024 * 1024)).toFixed(2)} MB
                        {' '}
                        ({Math.round((1 - compressedSize / file.size) * 100)}% reduction)
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      Dimensions: {previewUrl && <ImageDimensions src={previewUrl} />}
                    </p>
                  </div>
                </div>
              </div>

              {previewUrl && (
                <div className="relative w-full overflow-hidden rounded-lg border">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={compressedUrl || previewUrl}
                      alt="Preview"
                      className="object-contain w-full h-full"
                    />
                  </AspectRatio>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                className="flex-1"
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

              {compressedUrl && (
                <Button
                  className="flex-1"
                  onClick={handleDownload}
                  variant="secondary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Compressed Image
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper component to display image dimensions
const ImageDimensions = ({ src }: { src: string }) => {
  const [dimensions, setDimensions] = useState<string>('Loading...');

  const img = new Image();
  img.onload = () => {
    setDimensions(`${img.width} × ${img.height}px`);
  };
  img.src = src;

  return <>{dimensions}</>;
};