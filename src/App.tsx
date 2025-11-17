import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import Profile from "./pages/Profile";
import Gallery from "./pages/Gallery";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full bg-background">
            <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
            <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
