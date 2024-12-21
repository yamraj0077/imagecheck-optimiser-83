import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ImageCompressContent } from "@/components/image-tools/compress/ImageCompressContent";
import { ImageCompressManual } from "@/components/image-tools/compress/ImageCompressManual";
import { ImageCompressFAQ } from "@/components/image-tools/compress/ImageCompressFAQ";

const ImageCompress = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Image Compressor - Reduce Image Size | Image Tools</title>
        <meta 
          name="description" 
          content="Compress and optimize your images online for free. Reduce file size while maintaining quality. Perfect for web optimization and faster loading times." 
        />
        <meta 
          name="keywords" 
          content="image compress, compress image, reduce image size, image optimizer, free image compressor, online image compression" 
        />
        <meta property="og:title" content="Free Online Image Compressor - Reduce Image Size | Image Tools" />
        <meta 
          property="og:description" 
          content="Compress and optimize your images online for free. No registration required." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/image-tools/compress" />
        <link rel="canonical" href="https://yourwebsite.com/image-tools/compress" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Image Compressor Tool",
              "description": "Free online tool to compress and optimize images",
              "url": "https://yourwebsite.com/image-tools/compress",
              "applicationCategory": "WebApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Compress images",
                "Maintain image quality",
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
                  <Link to="/image-tools" className="hover:text-primary">Image Tools</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Compress Image</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <PageHeader
          title="Compress Images"
          description="Reduce image file size while maintaining quality. Perfect for web optimization and faster loading times."
          category="Image Tools"
        />

        <ImageCompressContent />
        <ImageCompressManual />
        <ImageCompressFAQ />
      </div>
    </>
  );
};

export default ImageCompress;