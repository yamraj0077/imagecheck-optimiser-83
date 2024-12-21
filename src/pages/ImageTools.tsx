import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  ImageDown,
  ImagePlus,
  Images,
  Crop,
  PaintBucket,
  FileImage,
  ImageMinus,
  Pencil,
  Wand2,
  Filter
} from "lucide-react";

const imageTools = [
  {
    title: "Image Compress",
    description: "Reduce image file size while maintaining quality. Perfect for web optimization and faster loading times.",
    icon: <ImageMinus className="h-6 w-6" />,
    to: "/image-tools/compress"
  },
  {
    title: "Image Converter",
    description: "Convert images between different formats including JPG, PNG, WebP, and more.",
    icon: <FileImage className="h-6 w-6" />,
    to: "/image-tools/convert"
  },
  {
    title: "Image Resize",
    description: "Resize images to specific dimensions while maintaining aspect ratio.",
    icon: <Images className="h-6 w-6" />,
    to: "/image-tools/resize"
  },
  {
    title: "Image Crop",
    description: "Crop images to remove unwanted areas and focus on specific parts.",
    icon: <Crop className="h-6 w-6" />,
    to: "/image-tools/crop"
  },
  {
    title: "Color Picker",
    description: "Extract colors from images and get their hex, RGB, and HSL values.",
    icon: <PaintBucket className="h-6 w-6" />,
    to: "/image-tools/color-picker"
  },
  {
    title: "Image Editor",
    description: "Edit images with basic tools like brightness, contrast, and filters.",
    icon: <Pencil className="h-6 w-6" />,
    to: "/image-tools/editor"
  },
  {
    title: "Background Remover",
    description: "Remove image backgrounds automatically using AI technology.",
    icon: <Wand2 className="h-6 w-6" />,
    to: "/image-tools/remove-bg"
  },
  {
    title: "Image Filter",
    description: "Apply artistic filters and effects to your images.",
    icon: <Filter className="h-6 w-6" />,
    to: "/image-tools/filters"
  },
  {
    title: "Image Optimizer",
    description: "Optimize images for web use with advanced compression algorithms.",
    icon: <ImageDown className="h-6 w-6" />,
    to: "/image-tools/optimize"
  },
  {
    title: "Watermark Maker",
    description: "Add text or image watermarks to protect your images.",
    icon: <ImagePlus className="h-6 w-6" />,
    to: "/image-tools/watermark"
  }
];

const ImageTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Image Tools - Edit, Convert & Optimize Images</title>
        <meta name="description" content="Free online image tools to edit, convert, compress, and optimize images. Easy-to-use tools for resizing, cropping, and adding effects to your images." />
        <meta name="keywords" content="image editor, image converter, compress images, resize images, crop images, image tools, free image tools" />
        <meta property="og:title" content="Free Online Image Tools - Edit, Convert & Optimize Images" />
        <meta property="og:description" content="Free online image tools to edit, convert, compress, and optimize images. No installation required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/image-tools" />
        <link rel="canonical" href="https://yourwebsite.com/image-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Image Tools",
              "description": "Free online image tools to edit, convert, compress, and optimize images.",
              "url": "https://yourwebsite.com/image-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Image Tools",
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
          title="Image Tools"
          description="Free online tools to edit, convert, compress, and optimize your images"
          category="Image Processing"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {imageTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageTools;