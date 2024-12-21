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
    question: "Can I rotate specific pages only?",
    answer: "Currently, the tool rotates all pages in the document. For selective page rotation, you may need to split your PDF first."
  },
  {
    question: "Will I lose quality when rotating pages?",
    answer: "No, rotating pages does not affect the quality of your PDF document."
  }
];

export const PDFRotateFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};