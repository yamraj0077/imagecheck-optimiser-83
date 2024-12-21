import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Extract PDF Pages",
    content: "1. Click the upload area or drag and drop your PDF file\n2. Enter the page numbers or ranges you want to extract (e.g., 1,3-5,7)\n3. Click 'Extract Pages' to create a new PDF\n4. Download your extracted PDF file"
  },
  {
    title: "Supported File Types",
    content: "This tool supports PDF files only. Make sure your file is in PDF format before uploading."
  },
  {
    title: "Page Range Format",
    content: "You can specify pages in several ways:\n- Single pages: 1,3,7\n- Page ranges: 1-5\n- Combination: 1,3-5,7-9\nMake sure the page numbers exist in your PDF."
  }
];

export const PDFExtractManual = () => {
  return <ToolManual sections={manualSections} />;
};