import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import { MainLayout } from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import ComponentsPage from "@/pages/ComponentsPage";
import ComponentDetailPage from "@/pages/ComponentDetailPage";
import DocumentationPage from "@/pages/DocumentationPage";
import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/components/:categoryId/:componentId" element={<ComponentDetailPage />} />
              <Route path="/components/:componentId" element={<ComponentDetailPage />} />
              <Route path="/docs" element={<DocumentationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
