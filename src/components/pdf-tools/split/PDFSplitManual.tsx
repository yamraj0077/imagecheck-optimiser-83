import React from "react";
import { ToolManual } from "@/components/tools/ToolManual";

const sections = [
  {
    title: "How to Split PDF Files",
    content: "Upload your PDF file using the upload zone. Once uploaded, you can specify page ranges to split the document. Enter the ranges in the format '1-3, 4-6' or leave empty to split all pages individually."
  },
  {
    title: "Page Range Format",
    content: "Use comma-separated values to specify multiple ranges. For example: '1-3, 4-6' will create two PDFs, one with pages 1-3 and another with pages 4-6. Single numbers are also accepted."
  },
  {
    title: "Download Split Files",
    content: "After processing, each split PDF will be automatically downloaded to your device. The files will be named according to their page ranges."
  }
];

export const PDFSplitManual = () => {
  return <ToolManual sections={sections} />;
};