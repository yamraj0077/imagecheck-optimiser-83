import { Helmet } from "react-helmet";
import { ToolCard } from "@/components/ToolCard";
import { PageHeader } from "@/components/PageHeader";
import {
  FileText,
  Image as ImageIcon,
  Type,
  Video,
  Code,
  QrCode,
  Wrench,
} from "lucide-react";

const tools = [
  {
    title: "PDF Tools",
    description: "Convert, compress, merge and split PDF files with ease",
    icon: <FileText className="h-6 w-6" />,
    to: "/pdf-tools",
  },
  {
    title: "Image Tools",
    description: "Compress, resize, and convert images between formats",
    icon: <ImageIcon className="h-6 w-6" />,
    to: "/image-tools",
  },
  {
    title: "Text Tools",
    description: "Format, convert, and analyze text content",
    icon: <Type className="h-6 w-6" />,
    to: "/text-tools",
  },
  {
    title: "Media Tools",
    description: "Convert and compress video and audio files",
    icon: <Video className="h-6 w-6" />,
    to: "/media-tools",
  },
  {
    title: "Developer Tools",
    description: "Format and validate code, generate assets",
    icon: <Code className="h-6 w-6" />,
    to: "/dev-tools",
  },
  {
    title: "QR Tools",
    description: "Generate and scan QR codes instantly",
    icon: <QrCode className="h-6 w-6" />,
    to: "/qr-tools",
  },
  {
    title: "Utilities",
    description: "Various helpful tools for everyday tasks",
    icon: <Wrench className="h-6 w-6" />,
    to: "/utilities",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Tools - Convert, Edit & Transform Files</title>
        <meta
          name="description"
          content="Free online tools to help you with your daily tasks. Convert files, compress images, format code, and more."
        />
      </Helmet>
      <div className="container py-8">
        <PageHeader
          title="Free Online Tools"
          description="A collection of free online tools to help you with your daily tasks"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;