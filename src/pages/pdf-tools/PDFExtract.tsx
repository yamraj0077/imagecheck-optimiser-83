import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PDFExtractContent } from "@/components/pdf-tools/extract/PDFExtractContent";
import { PDFExtractManual } from "@/components/pdf-tools/extract/PDFExtractManual";
import { PDFExtractFAQ } from "@/components/pdf-tools/extract/PDFExtractFAQ";

const PDFExtract = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Page Extractor - Extract Pages from PDF Files</title>
        <meta 
          name="description" 
          content="Extract specific pages from your PDF files with our free online PDF page extractor tool. No installation required, secure processing in your browser." 
        />
        <meta 
          name="keywords" 
          content="extract pdf pages, pdf page extractor, split pdf pages, pdf page selector, free pdf extractor, online pdf extractor" 
        />
        <meta property="og:title" content="Free Online PDF Page Extractor - Extract Pages from PDF Files" />
        <meta 
          property="og:description" 
          content="Extract specific pages from your PDF files with our free online PDF page extractor tool. Easy to use, no registration required." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools/extract" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools/extract" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PDF Page Extractor Tool",
              "description": "Free online tool to extract specific pages from PDF files",
              "url": "https://yourwebsite.com/pdf-tools/extract",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Extract specific pages from PDF",
                "Support for page ranges",
                "Browser-based processing",
                "Free to use",
                "No registration required"
              ],
              "browserRequirements": "Requires a modern web browser with JavaScript enabled"
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
                <BreadcrumbPage>Extract Pages</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PageHeader
          title="Extract Pages from PDF"
          description="Select and extract specific pages from your PDF files. Perfect for creating shorter documents or splitting large PDFs."
          category="PDF Tools"
        />

        <PDFExtractContent />
        <PDFExtractManual />
        <PDFExtractFAQ />
      </div>
    </>
  );
};

export default PDFExtract;