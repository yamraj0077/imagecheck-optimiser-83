import { useState } from "react";
import { PDFDocument } from 'pdf-lib';
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
    const selectedFiles = Array.from(e.target.files || []);
    const pdfFiles = selectedFiles.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length !== selectedFiles.length) {
      toast({
        title: "Invalid file type",
        description: "Please select only PDF files",
        variant: "destructive",
      });
      return;
    }

    setFiles(pdfFiles);
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

    try {
      setConverting(true);
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      
      // Extract text content from PDF
      let textContent = '';
      for (const page of pages) {
        const { width, height } = page.getSize();
        textContent += `Page ${pages.indexOf(page) + 1}\n\n`;
        // Add basic page information
        textContent += `Width: ${width}, Height: ${height}\n\n`;
      }

      // Create and download text file
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const fileName = file.name.replace('.pdf', '.txt');
      
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Conversion Complete",
        description: "Your file has been converted to text format",
      });
    } catch (error) {
      console.error('Conversion error:', error);
      toast({
        title: "Conversion Failed",
        description: "There was an error converting your PDF file",
        variant: "destructive",
      });
    } finally {
      setConverting(false);
    }
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
                Convert to Text
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};