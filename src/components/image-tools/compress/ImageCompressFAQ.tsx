import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, all processing is done in your browser. Your images are never uploaded to our servers."
  },
  {
    question: "Will I lose image quality?",
    answer: "The compression is optimized to maintain a good balance between file size and quality. While there might be some quality loss, it's designed to be minimal and usually not noticeable."
  },
  {
    question: "What's the maximum file size I can compress?",
    answer: "You can compress images up to 10MB in size."
  },
  {
    question: "What image formats are supported?",
    answer: "Currently, we support JPG, PNG, and WebP formats."
  }
];

export const ImageCompressFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};