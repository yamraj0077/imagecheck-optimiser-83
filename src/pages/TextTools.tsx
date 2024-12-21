import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { 
  Type,
  TextQuote,
  AlignLeft,
  Hash,
  Binary,
  FileText,
  FileJson,
  FileCode,
  FileDiff,
  FileSearch
} from "lucide-react";

const textTools = [
  {
    title: "Text Case Converter",
    description: "Convert text between different cases: uppercase, lowercase, title case, and more.",
    icon: <Type className="h-6 w-6" />,
    to: "/text-tools/case-converter"
  },
  {
    title: "Text Diff Checker",
    description: "Compare two texts and find the differences between them.",
    icon: <FileDiff className="h-6 w-6" />,
    to: "/text-tools/diff-checker"
  },
  {
    title: "Text Formatter",
    description: "Format and beautify text with proper indentation and spacing.",
    icon: <AlignLeft className="h-6 w-6" />,
    to: "/text-tools/formatter"
  },
  {
    title: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and other hash values from text.",
    icon: <Hash className="h-6 w-6" />,
    to: "/text-tools/hash-generator"
  },
  {
    title: "Base64 Encoder/Decoder",
    description: "Convert text to and from Base64 encoding.",
    icon: <Binary className="h-6 w-6" />,
    to: "/text-tools/base64"
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for design mockups and layouts.",
    icon: <TextQuote className="h-6 w-6" />,
    to: "/text-tools/lorem-ipsum"
  },
  {
    title: "JSON Formatter",
    description: "Format and validate JSON data with syntax highlighting.",
    icon: <FileJson className="h-6 w-6" />,
    to: "/text-tools/json-formatter"
  },
  {
    title: "XML Formatter",
    description: "Format and validate XML documents with proper indentation.",
    icon: <FileCode className="h-6 w-6" />,
    to: "/text-tools/xml-formatter"
  },
  {
    title: "Text Counter",
    description: "Count characters, words, sentences, and paragraphs in text.",
    icon: <FileText className="h-6 w-6" />,
    to: "/text-tools/counter"
  },
  {
    title: "Regex Tester",
    description: "Test and validate regular expressions with real-time matching.",
    icon: <FileSearch className="h-6 w-6" />,
    to: "/text-tools/regex-tester"
  }
];

const TextTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online Text Tools - Format, Convert & Analyze Text</title>
        <meta name="description" content="Free online text tools to format, convert, and analyze text. Tools for case conversion, diff checking, formatting, and more." />
        <meta name="keywords" content="text tools, text converter, text formatter, json formatter, xml formatter, regex tester" />
        <meta property="og:title" content="Free Online Text Tools - Format, Convert & Analyze Text" />
        <meta property="og:description" content="Free online text tools to format, convert, and analyze text. No installation required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/text-tools" />
        <link rel="canonical" href="https://yourwebsite.com/text-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Text Tools",
              "description": "Free online text tools to format, convert, and analyze text.",
              "url": "https://yourwebsite.com/text-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Text Tools",
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
          title="Text Tools"
          description="Free online tools to format, convert, and analyze text"
          category="Text Processing"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {textTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TextTools;