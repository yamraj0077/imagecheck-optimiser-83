import React from "react";
import { ToolManual } from "@/components/tools/ToolManual";

const sections = [
  {
    title: "Uploading Your PDF",
    content: "Click the upload zone or drag and drop your PDF file. Only PDF files are accepted."
  },
  {
    title: "Specifying Page Ranges",
    content: "Enter the page ranges you want to split into. Use formats like '1-3' for ranges and '4' for single pages. Separate multiple ranges with commas (e.g., '1-3, 4-6, 7')."
  },
  {
    title: "Downloading Split PDFs",
    content: "After clicking 'Split PDF', each specified range will be saved as a separate PDF file. Files will be named according to their page ranges."
  }
];

export const PDFSplitManual = () => {
  return <ToolManual sections={sections} />;
};