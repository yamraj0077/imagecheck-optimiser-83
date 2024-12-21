import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";

interface ActionButtonsProps {
  isLoading: boolean;
  compressedUrl: string | null;
  onCompress: () => void;
  onDownload: () => void;
}

export const ActionButtons = ({ isLoading, compressedUrl, onCompress, onDownload }: ActionButtonsProps) => {
  return (
    <div className="flex gap-4">
      <Button
        className="flex-1"
        onClick={onCompress}
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
          onClick={onDownload}
          variant="secondary"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Compressed Image
        </Button>
      )}
    </div>
  );
};