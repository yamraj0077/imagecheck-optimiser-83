import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PDFRotateContent } from "@/components/pdf-tools/rotate/PDFRotateContent";
import { PDFRotateManual } from "@/components/pdf-tools/rotate/PDFRotateManual";
import { PDFRotateFAQ } from "@/components/pdf-tools/rotate/PDFRotateFAQ";

const PDFRotate = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Page Rotation Tool - Rotate PDF Pages Easily</title>
        <meta 
          name="description" 
          content="Rotate PDF pages online for free. Change page orientation with our easy-to-use PDF rotation tool. No installation required, secure processing in your browser." 
        />
        <meta 
          name="keywords" 
          content="rotate pdf, pdf rotation, change pdf orientation, rotate pdf pages, free pdf rotator, online pdf rotation" 
        />
        <meta property="og:title" content="Free Online PDF Page Rotation Tool - Rotate PDF Pages Easily" />
        <meta 
          property="og:description" 
          content="Rotate PDF pages online with our free tool. Easy to use, no registration required." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools/rotate" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools/rotate" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PDF Rotation Tool",
              "description": "Free online tool to rotate PDF pages",
              "url": "https://yourwebsite.com/pdf-tools/rotate",
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
                <BreadcrumbPage>Rotate PDF</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PageHeader
          title="Rotate PDF Pages"
          description="Rotate pages in your PDF documents. Change orientation of individual or all pages with ease."
          category="PDF Tools"
        />

        <PDFRotateContent />
        <PDFRotateManual />
        <PDFRotateFAQ />
      </div>
    </>
  );
};

export default PDFRotate;