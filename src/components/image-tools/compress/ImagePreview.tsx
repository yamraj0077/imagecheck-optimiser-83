import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImagePreviewProps {
  previewUrl: string;
  compressedUrl: string | null;
}

export const ImagePreview = ({ previewUrl, compressedUrl }: ImagePreviewProps) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src={compressedUrl || previewUrl}
          alt="Preview"
          className="object-contain w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};