import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadZone } from "@/components/pdf-tools/UploadZone";
import { FileList } from "@/components/pdf-tools/FileList";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const PDFToWordContent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList);
      setFiles(newFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select a PDF file to convert",
        variant: "destructive",
      });
      return;
    }

    setConverting(true);
    // Simulating conversion process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Coming Soon!",
      description: "PDF to Word conversion will be available soon.",
    });
    setConverting(false);
  };

  return (
    <div className="space-y-8">
      <UploadZone onFileChange={handleFileChange} />
      <FileList files={files} onRemoveFile={handleRemoveFile} />
      {files.length > 0 && (
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleConvert}
            disabled={converting}
            className="w-full max-w-sm"
          >
            {converting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Converting...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Convert to Word
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};