import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { PDFExtractContent } from "@/components/pdf-tools/extract/PDFExtractContent";

const PDFExtract = () => {
  return (
    <>
      <Helmet>
        <title>Extract Pages from PDF - Free Online PDF Page Extractor</title>
        <meta
          name="description"
          content="Extract specific pages from your PDF files online. Free, secure, and easy to use. No installation required."
        />
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
          description="Select and extract specific pages from your PDF files"
          category="PDF Tools"
        />
        <PDFExtractContent />
      </div>
    </>
  );
};

export default PDFExtract;