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
import PDFMerge from "./pages/pdf-tools/PDFMerge";

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
              <Route path="/pdf-tools/merge" element={<PDFMerge />} />
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