import React from "react";
import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "What file formats are supported?",
    answer: "Currently, only PDF files are supported for splitting."
  },
  {
    question: "How do I specify which pages to split?",
    answer: "Enter page ranges in the format '1-3, 4-6'. You can specify multiple ranges separated by commas. Leave empty to split all pages individually."
  },
  {
    question: "Is there a file size limit?",
    answer: "For optimal performance, we recommend files under 100MB. Larger files may take longer to process."
  },
  {
    question: "Are my files secure?",
    answer: "Yes, all processing is done in your browser. Files are not uploaded to any server."
  }
];

export const PDFSplitFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};