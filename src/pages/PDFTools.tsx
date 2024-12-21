import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  FilePlus,
  FileOutput,
  Scissors
} from "lucide-react";

const pdfTools = [
  {
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document easily. Perfect for creating comprehensive reports or documentation.",
    icon: <FilePlus className="h-6 w-6" />,
    to: "/pdf-tools/merge"
  },
  {
    title: "Extract Pages",
    description: "Extract specific pages from your PDF files. Select individual pages or page ranges to create a new PDF.",
    icon: <Scissors className="h-6 w-6" />,
    to: "/pdf-tools/extract"
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