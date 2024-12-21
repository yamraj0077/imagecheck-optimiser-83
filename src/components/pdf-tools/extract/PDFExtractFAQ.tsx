import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, all processing is done in your browser. Your files are never uploaded to our servers."
  },
  {
    question: "What's the maximum file size?",
    answer: "You can process PDF files up to 100MB in size."
  },
  {
    question: "Will I lose quality when extracting pages?",
    answer: "No, the extracted pages maintain the same quality as the original PDF."
  },
  {
    question: "Can I extract pages from multiple PDFs at once?",
    answer: "Currently, you can extract pages from one PDF file at a time."
  }
];

export const PDFExtractFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};