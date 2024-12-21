import { ToolManual } from "@/components/tools/ToolManual";

const sections = [
  {
    title: "How to Convert PDF to Word",
    content: "1. Click 'Upload' or drag and drop your PDF file\n2. Wait for the file to upload\n3. Click 'Convert to Word'\n4. Download your converted Word document",
  },
  {
    title: "Supported File Types",
    content: "Our converter supports PDF files (.pdf) and converts them to Microsoft Word format (.docx).",
  },
  {
    title: "File Size Limits",
    content: "Maximum file size is 50MB per PDF file. For larger files, please consider splitting them first.",
  },
];

export const PDFToWordManual = () => {
  return <ToolManual sections={sections} />;
};