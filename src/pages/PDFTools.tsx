import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  FilePlus, 
  FileMinus, 
  FileSearch, 
  FileText, 
  FileCheck, 
  FileX, 
  FileEdit, 
  FileOutput, 
  FileInput, 
  FileCode 
} from "lucide-react";

const pdfTools = [
  {
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document easily. Perfect for creating comprehensive reports or documentation.",
    icon: <FilePlus className="h-6 w-6" />,
    to: "/pdf-tools/merge"
  },
  {
    title: "PDF Split",
    description: "Split large PDF files into smaller documents. Ideal for extracting specific pages or creating smaller file sizes.",
    icon: <FileMinus className="h-6 w-6" />,
    to: "/pdf-tools/split"
  },
  {
    title: "PDF OCR",
    description: "Convert scanned PDFs into searchable and editable text documents using advanced OCR technology.",
    icon: <FileSearch className="h-6 w-6" />,
    to: "/pdf-tools/ocr"
  },
  {
    title: "PDF Compress",
    description: "Reduce PDF file size while maintaining quality. Perfect for email attachments and web uploads.",
    icon: <FileCode className="h-6 w-6" />,
    to: "/pdf-tools/compress"
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files to editable Word documents with high accuracy and formatting preservation.",
    icon: <FileOutput className="h-6 w-6" />,
    to: "/pdf-tools/to-word"
  },
  {
    title: "Word to PDF",
    description: "Convert Word documents to PDF format while maintaining original formatting and layout.",
    icon: <FileInput className="h-6 w-6" />,
    to: "/pdf-tools/from-word"
  },
  {
    title: "PDF Editor",
    description: "Edit text, images, and other elements in PDF files directly online without software installation.",
    icon: <FileEdit className="h-6 w-6" />,
    to: "/pdf-tools/editor"
  },
  {
    title: "PDF Sign",
    description: "Add digital signatures to PDF documents securely. Perfect for business and legal documents.",
    icon: <FileCheck className="h-6 w-6" />,
    to: "/pdf-tools/sign"
  },
  {
    title: "PDF Delete Pages",
    description: "Remove unwanted pages from PDF files quickly and easily without affecting document quality.",
    icon: <FileX className="h-6 w-6" />,
    to: "/pdf-tools/delete-pages"
  },
  {
    title: "PDF Protect",
    description: "Add password protection and encryption to PDF files for enhanced document security.",
    icon: <FileText className="h-6 w-6" />,
    to: "/pdf-tools/protect"
  }
];

const PDFTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Tools - Edit, Convert, Merge & Split PDFs</title>
        <meta name="description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required. Process your PDFs securely and efficiently." />
        <meta name="keywords" content="pdf editor, pdf converter, merge pdf, split pdf, compress pdf, pdf tools, free pdf tools, online pdf tools" />
        <meta property="og:title" content="Free Online PDF Tools - Edit, Convert, Merge & Split PDFs" />
        <meta property="og:description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online PDF Tools",
              "description": "Free online PDF tools to edit, convert, merge, split, compress and transform PDF files.",
              "url": "https://yourwebsite.com/pdf-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "PDF Tools",
                "applicationCategory": "WebApplication",
                "operatingSystem": "Any",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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