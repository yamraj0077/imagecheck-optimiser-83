import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PDFMergeContent } from "@/components/pdf-tools/merge/PDFMergeContent";
import { PDFMergeManual } from "@/components/pdf-tools/merge/PDFMergeManual";
import { PDFMergeFAQ } from "@/components/pdf-tools/merge/PDFMergeFAQ";

const PDFMerge = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Merger - Combine PDF Files Easily | PDF Tools</title>
        <meta 
          name="description" 
          content="Merge multiple PDF files into one document easily with our free online PDF merger tool. No installation required, secure processing in your browser." 
        />
        <meta 
          name="keywords" 
          content="merge pdf, combine pdf, join pdf, pdf merger, free pdf merger, online pdf merger, pdf combiner" 
        />
        <meta property="og:title" content="Free Online PDF Merger - Combine PDF Files | PDF Tools" />
        <meta 
          property="og:description" 
          content="Merge multiple PDF files into one document with our free online PDF merger tool. Easy to use, no registration required." 
        />
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
              },
              "featureList": [
                "Merge multiple PDF files",
                "Drag and drop interface",
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

        <PDFMergeContent />
        <PDFMergeManual />
        <PDFMergeFAQ />
      </div>
    </>
  );
};

export default PDFMerge;