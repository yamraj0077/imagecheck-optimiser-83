import { ToolManual } from "@/components/tools/ToolManual";

const manualSections = [
  {
    title: "How to Compress Images",
    content: "1. Click the upload area or drag and drop your image file\n2. Select the image you want to compress\n3. Click 'Compress Image' to reduce its size\n4. Download your compressed image"
  },
  {
    title: "Supported File Types",
    content: "This tool supports JPG, PNG, and WebP image formats. Make sure your file is in one of these formats before uploading."
  },
  {
    title: "File Size Limits",
    content: "Maximum file size is 10MB. The tool will automatically maintain aspect ratio while compressing."
  }
];

export const ImageCompressManual = () => {
  return <ToolManual sections={manualSections} />;
};