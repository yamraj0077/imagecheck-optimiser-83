import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Merge PDF Files",
    content: "1. Click the upload area or drag and drop your PDF files\n2. Arrange the files in your desired order\n3. Click 'Merge PDFs' to combine them\n4. Download your merged PDF file"
  },
  {
    title: "Supported File Types",
    content: "This tool supports PDF files only. Make sure all your files are in PDF format before uploading."
  },
  {
    title: "File Size Limits",
    content: "Each file should be under 50MB. The total size of all files combined should not exceed 100MB."
  }
];

export const PDFMergeManual = () => {
  return <ToolManual sections={manualSections} />;
};