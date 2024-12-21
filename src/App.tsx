import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import PDFTools from "./pages/PDFTools";
import ImageTools from "./pages/ImageTools";
import TextTools from "./pages/TextTools";
import MediaTools from "./pages/MediaTools";
import DevTools from "./pages/DevTools";
import QRTools from "./pages/QRTools";
import Utilities from "./pages/Utilities";
import PDFMerge from "./pages/pdf-tools/PDFMerge";
import PDFToWord from "./pages/pdf-tools/PDFToWord";
import ImageCompress from "./pages/image-tools/ImageCompress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pdf-tools" element={<PDFTools />} />
              <Route path="/image-tools" element={<ImageTools />} />
              <Route path="/text-tools" element={<TextTools />} />
              <Route path="/media-tools" element={<MediaTools />} />
              <Route path="/dev-tools" element={<DevTools />} />
              <Route path="/qr-tools" element={<QRTools />} />
              <Route path="/utilities" element={<Utilities />} />
              <Route path="/pdf-tools/merge" element={<PDFMerge />} />
              <Route path="/pdf-tools/to-word" element={<PDFToWord />} />
              <Route path="/image-tools/compress" element={<ImageCompress />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;