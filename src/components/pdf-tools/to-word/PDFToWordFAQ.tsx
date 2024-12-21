import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is this PDF to Word converter free?",
    answer: "Yes, our PDF to Word converter is completely free to use with no hidden costs.",
  },
  {
    question: "Will my document formatting be preserved?",
    answer: "Yes, our converter maintains the original formatting, including text, images, and layout, to the best extent possible.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. Files are processed securely and deleted automatically after conversion.",
  },
  {
    question: "What happens if the conversion fails?",
    answer: "If a conversion fails, you'll be notified immediately. You can try converting again or contact our support for assistance.",
  },
];

export const PDFToWordFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};