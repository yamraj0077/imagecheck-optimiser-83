import { useState } from "react";
import { Helmet } from "react-helmet";
import { PDFDocument } from 'pdf-lib';
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { FileList } from "@/components/pdf-tools/FileList";
import { UploadZone } from "@/components/pdf-tools/UploadZone";

const PDFMerge = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  console.log("PDFMerge: Current files:", files);

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

    setFiles(prevFiles => [...prevFiles, ...pdfFiles]);
    console.log("PDFMerge: Files added:", pdfFiles);
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    console.log("PDFMerge: File removed at index:", index);
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      toast({
        title: "Not enough files",
        description: "Please select at least 2 PDF files to merge",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      console.log("PDFMerge: Starting merge process");

      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const fileArrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(fileArrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'merged-document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Success!",
        description: "PDFs merged successfully",
      });

      console.log("PDFMerge: Merge completed successfully");
    } catch (error) {
      console.error("PDFMerge: Error during merge:", error);
      toast({
        title: "Error",
        description: "Failed to merge PDFs. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Merge PDF Files Online - Free PDF Merger Tool</title>
        <meta name="description" content="Combine multiple PDF files into one document with our free online PDF merger tool. Easy to use, no registration required, and secure PDF processing." />
        <meta name="keywords" content="merge pdf, combine pdf, join pdf, pdf merger, free pdf merger, online pdf merger, pdf combiner" />
        <meta property="og:title" content="Merge PDF Files Online - Free PDF Merger Tool" />
        <meta property="og:description" content="Combine multiple PDF files into one document with our free online PDF merger tool. Easy to use, no registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools/merge" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools/merge" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PDF Merger Tool",
              "description": "Free online tool to merge multiple PDF files into one document",
              "url": "https://yourwebsite.com/pdf-tools/merge",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-primary">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/pdf-tools" className="hover:text-primary">PDF Tools</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Merge PDF</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PageHeader
          title="Merge PDF Files"
          description="Combine multiple PDF files into a single document. Perfect for creating comprehensive reports or documentation."
          category="PDF Tools"
        />

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <UploadZone onFileChange={handleFileChange} />
            <FileList files={files} onRemoveFile={removeFile} />

            {files.length > 0 && (
              <Button
                className="w-full"
                onClick={mergePDFs}
                disabled={isLoading || files.length < 2}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Merging PDFs...
                  </>
                ) : (
                  "Merge PDFs"
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFMerge;
