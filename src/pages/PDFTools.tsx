import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  FilePlus,
  Scissors,
  RotateCw,
  Split
} from "lucide-react";

const pdfTools = [
  {
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document. Perfect for creating comprehensive reports or documentation.",
    icon: <FilePlus className="h-6 w-6" />,
    to: "/pdf-tools/merge"
  },
  {
    title: "Extract Pages",
    description: "Extract specific pages from your PDF files. Select individual pages or page ranges to create a new PDF.",
    icon: <Scissors className="h-6 w-6" />,
    to: "/pdf-tools/extract"
  },
  {
    title: "PDF Rotate",
    description: "Rotate pages in your PDF documents. Change orientation of individual or all pages with ease.",
    icon: <RotateCw className="h-6 w-6" />,
    to: "/pdf-tools/rotate"
  },
  {
    title: "PDF Split",
    description: "Split your PDF into multiple documents. Create new PDFs at specified intervals or page breaks.",
    icon: <Split className="h-6 w-6" />,
    to: "/pdf-tools/split"
  }
];

const PDFTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Tools - Edit, Convert & Process PDFs</title>
        <meta name="description" content="Free online PDF tools to merge, split, extract pages, and rotate PDFs. Process your PDF files securely in your browser without uploading to servers." />
        <meta name="keywords" content="pdf tools, merge pdf, split pdf, extract pdf pages, rotate pdf, free pdf tools, online pdf editor" />
        <meta property="og:title" content="Free Online PDF Tools - Edit & Process PDFs" />
        <meta property="og:description" content="Free online PDF tools to process your PDF files securely in your browser. No installation required." />
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
              "description": "Free online PDF tools to process your PDF files securely in your browser.",
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
          description="Free online tools to edit, convert, merge, split and process PDF files"
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