import React from "react";
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
      </Helmet>

      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <PageHeader
          title="PDF Tools"
          description="Free online tools to edit, convert, merge, split, compress and transform PDF files"
          category="Document Processing"
        />

        <Tabs defaultValue="merge" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="merge">Merge PDF</TabsTrigger>
            <TabsTrigger value="split">Split PDF</TabsTrigger>
            <TabsTrigger value="compress">Compress PDF</TabsTrigger>
            <TabsTrigger value="convert">Convert PDF</TabsTrigger>
          </TabsList>

          <TabsContent value="merge" className="space-y-8">
            <PDFMergeContent />
            <PDFMergeManual />
            <PDFMergeFAQ />
          </TabsContent>

          <TabsContent value="split" className="space-y-8">
            <PDFSplitContent />
            <PDFSplitManual />
            <PDFSplitFAQ />
          </TabsContent>

          <TabsContent value="compress" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                PDF compression functionality will be available soon.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="convert" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                PDF conversion functionality will be available soon.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PDFTools;