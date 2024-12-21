import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { FileText, FilePlus, FileSearch, FileMinus, FileCheck, FileX, FileEdit, FileOutput, FileInput, FileCode } from "lucide-react";

const pdfTools = [
  {
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document",
    icon: <FilePlus className="h-6 w-6" />,
    to: "/pdf-tools/merge"
  },
  {
    title: "PDF Split",
    description: "Split PDF files into multiple documents",
    icon: <FileMinus className="h-6 w-6" />,
    to: "/pdf-tools/split"
  },
  {
    title: "PDF Compress",
    description: "Reduce PDF file size while maintaining quality",
    icon: <FileCode className="h-6 w-6" />,
    to: "/pdf-tools/compress"
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files to editable Word documents",
    icon: <FileOutput className="h-6 w-6" />,
    to: "/pdf-tools/to-word"
  },
  {
    title: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: <FileInput className="h-6 w-6" />,
    to: "/pdf-tools/from-word"
  },
  {
    title: "PDF Editor",
    description: "Edit text and images in PDF files",
    icon: <FileEdit className="h-6 w-6" />,
    to: "/pdf-tools/editor"
  },
  {
    title: "PDF OCR",
    description: "Convert scanned PDFs to searchable text",
    icon: <FileSearch className="h-6 w-6" />,
    to: "/pdf-tools/ocr"
  },
  {
    title: "PDF Sign",
    description: "Add digital signatures to PDF documents",
    icon: <FileCheck className="h-6 w-6" />,
    to: "/pdf-tools/sign"
  },
  {
    title: "PDF Delete Pages",
    description: "Remove pages from PDF files",
    icon: <FileX className="h-6 w-6" />,
    to: "/pdf-tools/delete-pages"
  },
  {
    title: "PDF Protect",
    description: "Add password protection to PDF files",
    icon: <FileText className="h-6 w-6" />,
    to: "/pdf-tools/protect"
  }
];

const PDFTools = () => {
  return (
    <>
      <Helmet>
        <title>PDF Tools - Free Online PDF Editor, Converter & More</title>
        <meta name="description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required." />
        <meta name="keywords" content="pdf editor, pdf converter, merge pdf, split pdf, compress pdf, pdf tools, free pdf tools" />
        <meta property="og:title" content="PDF Tools - Free Online PDF Editor, Converter & More" />
        <meta property="og:description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools" />
      </Helmet>
      <div className="container py-8">
        <PageHeader
          title="PDF Tools"
          description="Free online tools to edit, convert, merge, split, compress and transform PDF files"
          category="Document Processing"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pdfTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PDFTools;