import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Reifenwechsel from "@/pages/leistungen/Reifenwechsel";
import Reifenmontage from "@/pages/leistungen/Reifenmontage";
import Auswuchten from "@/pages/leistungen/Auswuchten";
import BremssattelLackierung from "@/pages/leistungen/BremssattelLackierung";
import FelgenInstandsetzung from "@/pages/leistungen/FelgenInstandsetzung";
import ReifenAnVerkauf from "@/pages/leistungen/ReifenAnVerkauf";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen/reifenwechsel" component={Reifenwechsel} />
      <Route path="/leistungen/reifenmontage" component={Reifenmontage} />
      <Route path="/leistungen/auswuchten" component={Auswuchten} />
      <Route path="/leistungen/bremssattel-lackierung" component={BremssattelLackierung} />
      <Route path="/leistungen/felgen-instandsetzung" component={FelgenInstandsetzung} />
      <Route path="/leistungen/reifen-an-verkauf" component={ReifenAnVerkauf} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
