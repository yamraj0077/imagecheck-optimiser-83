import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Split PDF Files",
    content: "1. Click the upload area or drag and drop your PDF file\n2. Enter the number of pages you want in each split file\n3. Click 'Split PDF' to create multiple PDF files\n4. Download each split PDF file"
  },
  {
    title: "Supported File Types",
    content: "This tool supports PDF files only. Make sure your file is in PDF format before uploading."
  },
  {
    title: "Split Options",
    content: "Enter the number of pages you want in each split file. For example:\n- Enter '1' to create single-page PDFs\n- Enter '5' to create PDFs with 5 pages each\nThe last PDF may have fewer pages if the total page count isn't evenly divisible."
  }
];

export const PDFSplitManual = () => {
  return <ToolManual sections={manualSections} />;
};