import { useState } from "react";
import { PDFDocument } from 'pdf-lib';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { FileList } from "@/components/pdf-tools/FileList";
import { UploadZone } from "@/components/pdf-tools/UploadZone";

export const PDFExtractContent = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [pageRange, setPageRange] = useState("");
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

  const extractPages = async () => {
    if (files.length === 0) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file",
        variant: "destructive",
      });
      return;
    }

    if (!pageRange.trim()) {
      toast({
        title: "No pages specified",
        description: "Please enter the pages you want to extract",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      const file = files[0];
      const fileArrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(fileArrayBuffer);
      const newPdf = await PDFDocument.create();
      
      // Parse page range (e.g., "1,3-5,7")
      const pages = pageRange.split(',').flatMap(range => {
        if (range.includes('-')) {
          const [start, end] = range.split('-').map(num => parseInt(num.trim()));
          return Array.from({ length: end - start + 1 }, (_, i) => start + i - 1);
        }
        return [parseInt(range.trim()) - 1];
      });

      // Validate page numbers
      const totalPages = pdfDoc.getPageCount();
      const invalidPages = pages.filter(page => page < 0 || page >= totalPages);
      if (invalidPages.length > 0) {
        throw new Error(`Invalid page numbers. PDF has ${totalPages} pages.`);
      }

      // Copy specified pages
      for (const pageNum of pages) {
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageNum]);
        newPdf.addPage(copiedPage);
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `extracted-pages.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: "Pages extracted successfully",
      });
    } catch (error) {
      console.error('Extraction error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to extract pages",
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
              <label htmlFor="pageRange" className="block text-sm font-medium mb-2">
                Page Range (e.g., 1,3-5,7)
              </label>
              <Input
                id="pageRange"
                placeholder="Enter page numbers or ranges"
                value={pageRange}
                onChange={(e) => setPageRange(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              onClick={extractPages}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Extracting Pages...
                </>
              ) : (
                "Extract Pages"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};