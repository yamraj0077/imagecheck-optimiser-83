import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Rotate PDF Pages",
    content: "1. Click the upload area or drag and drop your PDF file\n2. Choose rotation direction (left or right)\n3. Click the rotation button to rotate all pages\n4. Download your rotated PDF file"
  },
  {
    title: "Supported File Types",
    content: "This tool supports PDF files only. Make sure your file is in PDF format before uploading."
  },
  {
    title: "Rotation Options",
    content: "- Rotate Left: Rotates pages 90 degrees counterclockwise\n- Rotate Right: Rotates pages 90 degrees clockwise\nAll pages in the document will be rotated in the selected direction."
  }
];

export const PDFRotateManual = () => {
  return <ToolManual sections={manualSections} />;
};