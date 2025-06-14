import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/AppContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTracker from "./components/ScrollTracker";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import CookiesPolicy from "./pages/CookiesPolicy";
import CookieSettings from "./pages/CookieSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ErrorBoundary>
                <ScrollToTop />
                <ScrollTracker />
                <CookieBanner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/servicos" element={<Services />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/clientes" element={<Clients />} />
                  <Route path="/clients" element={<Clients />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/politica-cookies" element={<CookiesPolicy />} />
                  <Route path="/cookie-policy" element={<CookiesPolicy />} />
                  <Route
                    path="/configuracoes-cookies"
                    element={<CookieSettings />}
                  />
                  <Route path="/cookie-settings" element={<CookieSettings />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ErrorBoundary>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
