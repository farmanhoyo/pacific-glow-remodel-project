import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import USRealEstate from "./pages/articles/USRealEstate";
import IntercorporateLoans from "./pages/articles/IntercorporateLoans";
import ChangeInUse from "./pages/articles/ChangeInUse";
import ForeignTaxCredit from "./pages/articles/ForeignTaxCredit";
import BusinessPlan from "./pages/articles/BusinessPlan";
import Section85Rollover from "./pages/articles/Section85Rollover";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles/us-real-estate" element={<USRealEstate />} />
          <Route path="/articles/intercorporate-loans" element={<IntercorporateLoans />} />
          <Route path="/articles/change-in-use" element={<ChangeInUse />} />
          <Route path="/articles/foreign-tax-credit" element={<ForeignTaxCredit />} />
          <Route path="/articles/business-plan" element={<BusinessPlan />} />
          <Route path="/articles/section-85-rollover" element={<Section85Rollover />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
