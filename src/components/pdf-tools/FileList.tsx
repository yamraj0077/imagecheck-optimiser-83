import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

interface FileListProps {
  files: File[];
  onRemoveFile: (index: number) => void;
}

export const FileList = ({ files, onRemoveFile }: FileListProps) => {
  console.log("FileList: Rendering with files:", files);
  
  if (files.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Selected Files</h3>
      <div className="space-y-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-accent/50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <FileUp className="w-5 h-5" />
              <span className="text-sm font-medium">{file.name}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveFile(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};