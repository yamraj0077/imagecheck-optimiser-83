import { useState } from "react";
import { PDFDocument } from 'pdf-lib';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { FileList } from "@/components/pdf-tools/FileList";
import { UploadZone } from "@/components/pdf-tools/UploadZone";

export const PDFSplitContent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pagesPerFile, setPagesPerFile] = useState("1");
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

  const splitPDF = async () => {
    if (files.length === 0) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file",
        variant: "destructive",
      });
      return;
    }

    const pages = parseInt(pagesPerFile);
    if (isNaN(pages) || pages < 1) {
      toast({
        title: "Invalid page count",
        description: "Please enter a valid number of pages per file",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      const file = files[0];
      const fileArrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileArrayBuffer);
      const totalPages = pdfDoc.getPageCount();
      
      // Create split PDFs
      for (let startPage = 0; startPage < totalPages; startPage += pages) {
        const endPage = Math.min(startPage + pages, totalPages);
        const newPdf = await PDFDocument.create();
        
        const copiedPages = await newPdf.copyPages(pdfDoc, Array.from(
          { length: endPage - startPage },
          (_, i) => startPage + i
        ));
        
        copiedPages.forEach(page => {
          newPdf.addPage(page);
        });

        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `split-${startPage + 1}-${endPage}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      toast({
        title: "Success!",
        description: "PDF split successfully",
      });
    } catch (error) {
      console.error('Split error:', error);
      toast({
        title: "Error",
        description: "Failed to split PDF",
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
          <div className="space-y-4">
            <div>
              <label htmlFor="pagesPerFile" className="block text-sm font-medium mb-2">
                Pages per File
              </label>
              <Input
                id="pagesPerFile"
                type="number"
                min="1"
                placeholder="Enter number of pages per file"
                value={pagesPerFile}
                onChange={(e) => setPagesPerFile(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              onClick={splitPDF}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Splitting PDF...
                </>
              ) : (
                "Split PDF"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};