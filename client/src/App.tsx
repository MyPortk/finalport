import { Switch, Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Navbar from "@/components/navbar";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router base="/finalport"> {/* ✅ Base path for GitHub Pages */}
        <div className="min-h-screen bg-background">
          <Navbar />
          <AppRouter />
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
