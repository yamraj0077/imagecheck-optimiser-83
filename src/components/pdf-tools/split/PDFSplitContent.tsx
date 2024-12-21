import React, { useState } from "react";
import { PDFDocument } from 'pdf-lib';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { FileList } from "@/components/pdf-tools/FileList";
import { UploadZone } from "@/components/pdf-tools/UploadZone";
import { Input } from "@/components/ui/input";

export const PDFSplitContent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pageRanges, setPageRanges] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      if (selectedFiles[0].type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please select a PDF file",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFiles[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPageRanges("");
  };

  const splitPDF = async () => {
    if (!file || !pageRanges.trim()) {
      toast({
        title: "Missing information",
        description: "Please select a PDF file and specify page ranges",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const totalPages = pdfDoc.getPageCount();

      const ranges = pageRanges.split(",").map(range => {
        const [start, end] = range.trim().split("-").map(num => parseInt(num));
        return { start: start || 1, end: end || start || totalPages };
      });

      for (let i = 0; i < ranges.length; i++) {
        const { start, end } = ranges[i];
        if (start < 1 || end > totalPages || start > end) {
          throw new Error("Invalid page range");
        }

        const newPdf = await PDFDocument.create();
        const pages = await newPdf.copyPages(pdfDoc, Array.from(
          { length: end - start + 1 },
          (_, i) => start - 1 + i
        ));
        pages.forEach(page => newPdf.addPage(page));

        const pdfBytes = await newPdf.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `split-${start}-${end}.pdf`;
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
      toast({
        title: "Error",
        description: "Failed to split PDF. Please check your page ranges and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="space-y-6">
        <UploadZone onFileChange={handleFileChange} />
        {file && (
          <>
            <FileList files={[file]} onRemoveFile={() => removeFile()} />
            <div className="space-y-2">
              <label htmlFor="pageRanges" className="text-sm font-medium">
                Page Ranges (e.g., 1-3, 4-6, 7)
              </label>
              <Input
                id="pageRanges"
                placeholder="Enter page ranges (e.g., 1-3, 4-6, 7)"
                value={pageRanges}
                onChange={(e) => setPageRanges(e.target.value)}
              />
            </div>
            <Button
              className="w-full"
              onClick={splitPDF}
              disabled={isLoading || !pageRanges.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Splitting PDF...
                </>
              ) : (
                "Split PDF"
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};