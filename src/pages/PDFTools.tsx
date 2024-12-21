import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/PageHeader";
import { ToolCard } from "@/components/ToolCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FilePlus, 
  FileMinus, 
  FileSearch, 
  FileText, 
  FileCheck, 
  FileX, 
  FileEdit, 
  FileOutput, 
  FileInput, 
  FileCode 
} from "lucide-react";

const pdfTools = [
  {
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document easily. Perfect for creating comprehensive reports or documentation.",
    icon: <FilePlus className="h-6 w-6" />,
    to: "/pdf-tools/merge"
  },
  {
    title: "PDF Split",
    description: "Split large PDF files into smaller documents. Ideal for extracting specific pages or creating smaller file sizes.",
    icon: <FileMinus className="h-6 w-6" />,
    to: "/pdf-tools/split"
  },
  {
    title: "PDF OCR",
    description: "Convert scanned PDFs into searchable and editable text documents using advanced OCR technology.",
    icon: <FileSearch className="h-6 w-6" />,
    to: "/pdf-tools/ocr"
  },
  {
    title: "PDF Compress",
    description: "Reduce PDF file size while maintaining quality. Perfect for email attachments and web uploads.",
    icon: <FileCode className="h-6 w-6" />,
    to: "/pdf-tools/compress"
  },
  {
    title: "PDF to Word",
    description: "Convert PDF files to editable Word documents with high accuracy and formatting preservation.",
    icon: <FileOutput className="h-6 w-6" />,
    to: "/pdf-tools/to-word"
  },
  {
    title: "Word to PDF",
    description: "Convert Word documents to PDF format while maintaining original formatting and layout.",
    icon: <FileInput className="h-6 w-6" />,
    to: "/pdf-tools/from-word"
  },
  {
    title: "PDF Editor",
    description: "Edit text, images, and other elements in PDF files directly online without software installation.",
    icon: <FileEdit className="h-6 w-6" />,
    to: "/pdf-tools/editor"
  },
  {
    title: "PDF Sign",
    description: "Add digital signatures to PDF documents securely. Perfect for business and legal documents.",
    icon: <FileCheck className="h-6 w-6" />,
    to: "/pdf-tools/sign"
  },
  {
    title: "PDF Delete Pages",
    description: "Remove unwanted pages from PDF files quickly and easily without affecting document quality.",
    icon: <FileX className="h-6 w-6" />,
    to: "/pdf-tools/delete-pages"
  },
  {
    title: "PDF Protect",
    description: "Add password protection and encryption to PDF files for enhanced document security.",
    icon: <FileText className="h-6 w-6" />,
    to: "/pdf-tools/protect"
  }
];

const faqs = [
  {
    question: "How do I merge PDF files?",
    answer: "To merge PDF files, select the 'PDF Merge' tool, upload your PDF files by dragging and dropping them or clicking the upload button, arrange them in your desired order, and click 'Merge PDFs'. Your merged PDF will be ready to download."
  },
  {
    question: "Is it safe to use these PDF tools?",
    answer: "Yes, all our PDF tools process files directly in your browser. Your files are never uploaded to our servers, ensuring complete privacy and security."
  },
  {
    question: "What's the maximum file size limit?",
    answer: "Each PDF file can be up to 50MB in size. For the merge tool, you can combine up to 20 PDF files at once."
  },
  {
    question: "Are these tools really free?",
    answer: "Yes, all our PDF tools are completely free to use. There are no hidden charges or subscription fees."
  },
  {
    question: "Can I use these tools on my mobile device?",
    answer: "Yes, all our PDF tools are fully responsive and work on mobile devices, tablets, and desktop computers."
  }
];

const userGuide = {
  title: "How to Use PDF Tools",
  steps: [
    {
      title: "Choose Your Tool",
      description: "Select the appropriate tool from our collection based on your needs (merge, split, compress, etc.)."
    },
    {
      title: "Upload Your Files",
      description: "Click the upload button or drag and drop your PDF files into the designated area."
    },
    {
      title: "Process Your Files",
      description: "Follow the tool-specific instructions to process your files (e.g., arrange pages for merging)."
    },
    {
      title: "Download Results",
      description: "Once processing is complete, download your modified PDF files."
    }
  ]
};

const PDFTools = () => {
  return (
    <>
      <Helmet>
        <title>Free Online PDF Tools - Edit, Convert, Merge & Split PDFs</title>
        <meta name="description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required. Process your PDFs securely and efficiently." />
        <meta name="keywords" content="pdf editor, pdf converter, merge pdf, split pdf, compress pdf, pdf tools, free pdf tools, online pdf tools" />
        <meta property="og:title" content="Free Online PDF Tools - Edit, Convert, Merge & Split PDFs" />
        <meta property="og:description" content="Free online PDF tools to edit, convert, merge, split, compress and transform PDF files. No installation or registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/pdf-tools" />
        <link rel="canonical" href="https://yourwebsite.com/pdf-tools" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online PDF Tools",
              "description": "Free online PDF tools to edit, convert, merge, split, compress and transform PDF files.",
              "url": "https://yourwebsite.com/pdf-tools",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "PDF Tools",
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
          title="PDF Tools"
          description="Free online tools to edit, convert, merge, split, compress and transform PDF files"
          category="Document Processing"
        />
        
        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {pdfTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>

        {/* User Guide Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">User Guide</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {userGuide.steps.map((step, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  );
};

export default PDFTools;