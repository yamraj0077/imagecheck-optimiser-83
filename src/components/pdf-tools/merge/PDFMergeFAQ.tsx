import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, all processing is done in your browser. Your files are never uploaded to our servers."
  },
  {
    question: "What's the maximum number of PDFs I can merge?",
    answer: "You can merge up to 20 PDF files at once."
  },
  {
    question: "Will I lose quality when merging PDFs?",
    answer: "No, our tool maintains the original quality of your PDF files during the merge process."
  },
  {
    question: "Can I rearrange the order of PDFs?",
    answer: "Yes, you can drag and drop files in the list to change their order before merging."
  }
];

export const PDFMergeFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};