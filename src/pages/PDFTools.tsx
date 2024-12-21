import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PDFMergeContent } from "@/components/pdf-tools/merge/PDFMergeContent";
import { PDFMergeFAQ } from "@/components/pdf-tools/merge/PDFMergeFAQ";
import { PDFMergeManual } from "@/components/pdf-tools/merge/PDFMergeManual";
import { PDFSplitContent } from "@/components/pdf-tools/split/PDFSplitContent";
import { PDFSplitFAQ } from "@/components/pdf-tools/split/PDFSplitFAQ";
import { PDFSplitManual } from "@/components/pdf-tools/split/PDFSplitManual";

const PDFTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Tools - Edit, Convert, Merge & Split PDFs</title>
        <meta 
          name="description" 
          content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required. Process your PDFs securely and efficiently." 
        />
        <meta 
          name="keywords" 
          content="pdf editor, pdf converter, merge pdf, split pdf, compress pdf, pdf tools, free pdf tools, online pdf tools" 
        />
        <meta 
          property="og:title" 
          content="Free Online PDF Tools - Edit, Convert, Merge & Split PDFs" 
        />
        <meta 
          property="og:description" 
          content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools" />
      </Helmet>

      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <PageHeader
          title="PDF Tools"
          description="Free online tools to edit, convert, merge, split, compress and transform PDF files"
          category="Document Processing"
        />

        <Tabs defaultValue="merge" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="merge">Merge PDF</TabsTrigger>
            <TabsTrigger value="split">Split PDF</TabsTrigger>
            <TabsTrigger value="compress">Compress PDF</TabsTrigger>
            <TabsTrigger value="convert">Convert PDF</TabsTrigger>
          </TabsList>

          <TabsContent value="merge" className="space-y-8">
            <div className="max-w-3xl mx-auto">
              <PDFMergeContent />
              <PDFMergeManual />
              <PDFMergeFAQ />
            </div>
          </TabsContent>

          <TabsContent value="split" className="space-y-8">
            <div className="max-w-3xl mx-auto">
              <PDFSplitContent />
              <PDFSplitManual />
              <PDFSplitFAQ />
            </div>
          </TabsContent>

          <TabsContent value="compress">
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-muted-foreground">PDF Compression tool coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="convert">
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-muted-foreground">PDF Conversion tool coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PDFTools;