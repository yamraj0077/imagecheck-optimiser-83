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
    question: "How are the split files named?",
    answer: "Split files are named based on their page ranges, e.g., 'split-1-5.pdf' for pages 1-5."
  },
  {
    question: "Will I lose quality when splitting the PDF?",
    answer: "No, splitting does not affect the quality of your PDF documents."
  }
];

export const PDFSplitFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};