import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { PDFToWordContent } from "@/components/pdf-tools/to-word/PDFToWordContent";
import { PDFToWordManual } from "@/components/pdf-tools/to-word/PDFToWordManual";
import { PDFToWordFAQ } from "@/components/pdf-tools/to-word/PDFToWordFAQ";

const PDFToWord = () => {
  return (
    <>
      <Helmet>
        <title>Convert PDF to Word - Free Online PDF to DOCX Converter</title>
        <meta
          name="description"
          content="Convert PDF files to editable Word documents online. Free, secure, and easy to use. Maintain formatting and layout with high accuracy."
        />
        <meta
          name="keywords"
          content="pdf to word, pdf converter, convert pdf to docx, online pdf converter, free pdf to word"
        />
      </Helmet>
      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <PageHeader
          title="PDF to Word Converter"
          description="Convert your PDF files to editable Word documents while maintaining formatting"
          category="PDF Conversion"
        />
        <PDFToWordContent />
        <PDFToWordManual />
        <PDFToWordFAQ />
      </div>
    </>
  );
};

export default PDFToWord;