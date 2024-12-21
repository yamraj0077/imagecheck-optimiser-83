import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Split PDF Files",
    content: "1. Click the upload area or drag and drop your PDF file\n2. Wait for the file to load\n3. Click 'Split PDF' to separate pages\n4. Download your individual PDF pages"
  },
  {
    title: "Supported File Types",
    content: "This tool supports PDF files only. Make sure your file is in PDF format before uploading."
  },
  {
    title: "File Size Limits",
    content: "Each file should be under 50MB for optimal performance."
  }
];

export const PDFSplitManual = () => {
  return <ToolManual sections={manualSections} />;
};