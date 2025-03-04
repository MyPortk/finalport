import { useState, useEffect } from "react";
import { Router, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/navbar";

// ✅ Custom hook for hash-based navigation
const useHashLocation = () => {
  const [location, setLocation] = useState(
    window.location.hash.replace(/^#/, "") || "/"
  );

  useEffect(() => {
    const handler = () => setLocation(window.location.hash.replace(/^#/, "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
    setLocation(to);
  };

  return [location, navigate] as const;
};

function RouterComponent() {
  const [location, navigate] = useHashLocation();

  return (
    <Router>
      <Switch location={location}>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <RouterComponent />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
