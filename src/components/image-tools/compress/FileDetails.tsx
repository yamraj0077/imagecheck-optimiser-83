import { useState, useEffect } from "react";
import { FileIcon } from "lucide-react";

interface ImageDimensionsProps {
  src: string;
}

const ImageDimensions = ({ src }: ImageDimensionsProps) => {
  const [dimensions, setDimensions] = useState<string>("Loading...");

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setDimensions(`${img.width} × ${img.height}px`);
    };
    img.src = src;
  }, [src]);

  return <>{dimensions}</>;
};

interface FileDetailsProps {
  file: File;
  previewUrl: string | null;
  compressedSize: number | null;
}

export const FileDetails = ({ file, previewUrl, compressedSize }: FileDetailsProps) => {
  return (
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
              {" "}
              ({Math.round((1 - compressedSize / file.size) * 100)}% reduction)
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Dimensions: {previewUrl && <ImageDimensions src={previewUrl} />}
          </p>
        </div>
      </div>
    </div>
  );
};