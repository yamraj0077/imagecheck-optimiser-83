import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface UploadZoneProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadZone = ({ onFileChange }: UploadZoneProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-background hover:bg-accent/50 border-border"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">PDF files only</p>
        </div>
        <Input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept=".pdf"
          multiple
          onChange={onFileChange}
        />
      </label>
    </div>
  );
};