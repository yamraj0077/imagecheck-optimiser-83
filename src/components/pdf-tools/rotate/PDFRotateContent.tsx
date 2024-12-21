import { useState } from "react";
import { PDFDocument, degrees } from 'pdf-lib';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, RotateCw, RotateCcw } from "lucide-react";
import { FileList } from "@/components/pdf-tools/FileList";
import { UploadZone } from "@/components/pdf-tools/UploadZone";

export const PDFRotateContent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
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

    setFiles([pdfFiles[0]]); // Only keep the first file
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const rotatePDF = async (rotationDegrees: number) => {
    if (files.length === 0) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      const file = files[0];
      const fileArrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileArrayBuffer);
      
      // Rotate all pages
      const pages = pdfDoc.getPages();
      pages.forEach(page => {
        const currentRotation = page.getRotation().angle;
        const newRotationDegrees = (currentRotation + rotationDegrees + 360) % 360;
        page.setRotation(degrees(newRotationDegrees));
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `rotated-${rotationDegrees}-degrees.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: `PDF rotated ${rotationDegrees} degrees successfully`,
      });
    } catch (error) {
      console.error('Rotation error:', error);
      toast({
        title: "Error",
        description: "Failed to rotate PDF pages",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <UploadZone onFileChange={handleFileChange} />
        <FileList files={files} onRemoveFile={removeFile} />

        {files.length > 0 && (
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => rotatePDF(-90)}
              disabled={isProcessing}
              className="flex-1"
            >
              {isProcessing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RotateCcw className="mr-2 h-4 w-4" />
              )}
              Rotate Left
            </Button>
            <Button
              onClick={() => rotatePDF(90)}
              disabled={isProcessing}
              className="flex-1"
            >
              {isProcessing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RotateCw className="mr-2 h-4 w-4" />
              )}
              Rotate Right
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};