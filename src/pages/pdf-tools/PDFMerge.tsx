import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PDFMerge = () => {
  return (
    <>
      <Helmet>
        <title>Merge PDF Files Online - Free PDF Merger Tool</title>
        <meta name="description" content="Combine multiple PDF files into one document with our free online PDF merger tool. Easy to use, no registration required, and secure PDF processing." />
        <meta name="keywords" content="merge pdf, combine pdf, join pdf, pdf merger, free pdf merger, online pdf merger" />
        <meta property="og:title" content="Merge PDF Files Online - Free PDF Merger Tool" />
        <meta property="og:description" content="Combine multiple PDF files into one document with our free online PDF merger tool. Easy to use, no registration required." />
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
              }
            }
          `}
        </script>
      </Helmet>
      <div className="container py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="hover:text-primary">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/pdf-tools" className="hover:text-primary">PDF Tools</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Merge PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <PageHeader
          title="Merge PDF Files"
          description="Combine multiple PDF files into a single document. Perfect for creating comprehensive reports or documentation."
          category="PDF Tools"
        />
        {/* Tool implementation will go here */}
      </div>
    </>
  );
};

export default PDFMerge;