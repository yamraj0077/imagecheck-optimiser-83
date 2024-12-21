import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ImageUploadZone } from "@/components/image-tools/ImageUploadZone";
import { FileDetails } from "./FileDetails";
import { ImagePreview } from "./ImagePreview";
import { ActionButtons } from "./ActionButtons";

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
      
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
      });

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

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (blob) => resolve(blob as Blob),
          'image/jpeg',
          0.7
        );
      });

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

  const cleanupUrls = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    if (compressedUrl) {
      URL.revokeObjectURL(compressedUrl);
    }
  };

  useEffect(() => {
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
              <FileDetails 
                file={file}
                previewUrl={previewUrl}
                compressedSize={compressedSize}
              />
              {previewUrl && (
                <ImagePreview 
                  previewUrl={previewUrl}
                  compressedUrl={compressedUrl}
                />
              )}
            </div>

            <ActionButtons 
              isLoading={isLoading}
              compressedUrl={compressedUrl}
              onCompress={compressImage}
              onDownload={handleDownload}
            />
          </div>
        )}
      </div>
    </div>
  );
};