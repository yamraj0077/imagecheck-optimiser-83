import React from "react";
import { ToolFAQ } from "@/components/tools/ToolFAQ";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, all PDF splitting is done in your browser. Your files are never uploaded to our servers."
  },
  {
    question: "What page ranges can I specify?",
    answer: "You can specify single pages (e.g., '1') or page ranges (e.g., '1-3'). Multiple ranges can be separated by commas."
  },
  {
    question: "Will I lose quality when splitting PDFs?",
    answer: "No, our tool maintains the original quality of your PDF files during the splitting process."
  },
  {
    question: "What's the maximum file size I can split?",
    answer: "You can split PDF files up to 100MB in size."
  }
];

export const PDFSplitFAQ = () => {
  return <ToolFAQ faqs={faqs} />;
};