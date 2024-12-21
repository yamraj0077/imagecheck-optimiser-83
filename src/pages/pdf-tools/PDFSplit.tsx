import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PDFSplitContent } from "@/components/pdf-tools/split/PDFSplitContent";
import { PDFSplitManual } from "@/components/pdf-tools/split/PDFSplitManual";
import { PDFSplitFAQ } from "@/components/pdf-tools/split/PDFSplitFAQ";

const PDFSplit = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Splitter - Split PDF Files into Multiple Documents</title>
        <meta 
          name="description" 
          content="Split PDF files into multiple documents online for free. Create new PDFs at specified intervals with our easy-to-use PDF splitting tool." 
        />
        <meta 
          name="keywords" 
          content="split pdf, pdf splitter, divide pdf, separate pdf pages, free pdf splitter, online pdf splitter" 
        />
        <meta property="og:title" content="Free Online PDF Splitter - Split PDF Files into Multiple Documents" />
        <meta 
          property="og:description" 
          content="Split PDF files into multiple documents with our free online tool. Easy to use, no registration required." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools/split" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools/split" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PDF Splitter Tool",
              "description": "Free online tool to split PDF files into multiple documents",
              "url": "https://yourwebsite.com/pdf-tools/split",
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
                <BreadcrumbPage>Split PDF</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PageHeader
          title="Split PDF Files"
          description="Split your PDF into multiple documents. Create new PDFs at specified intervals or page breaks."
          category="PDF Tools"
        />

        <PDFSplitContent />
        <PDFSplitManual />
        <PDFSplitFAQ />
      </div>
    </>
  );
};

export default PDFSplit;