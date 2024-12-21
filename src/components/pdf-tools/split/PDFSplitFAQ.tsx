import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, all processing is done in your browser. Your files are never uploaded to our servers."
  },
  {
    question: "What happens to my PDF when I split it?",
    answer: "Each page of your PDF will be saved as a separate PDF file, maintaining the original quality."
  },
  {
    question: "Is there a limit to the PDF size I can split?",
    answer: "The tool can handle PDFs up to 50MB in size. Larger files may take longer to process."
  },
  {
    question: "Will I lose quality when splitting PDFs?",
    answer: "No, our tool maintains the original quality of your PDF files during the splitting process."
  }
];

export const PDFSplitFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};