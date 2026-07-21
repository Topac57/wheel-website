import { useEffect, useState, type ComponentType } from "react";
import { Router, useLocation } from "wouter";
import { loadPage, normalizePath } from "@/pages/registry";
import { RouteMeta } from "@/components/RouteMeta";

interface AppProps {
  /** Nur beim Vorrendern gesetzt: der Pfad, für den die Seite erzeugt wird. */
  ssrPath?: string;
  /** Die Seitenkomponente für den Startpfad — beim Vorrendern statisch, im
   *  Browser bereits vor `hydrateRoot` nachgeladen. Dadurch rendert der erste
   *  Client-Durchlauf exakt dasselbe wie der Server: keine Hydration-Warnung,
   *  kein Aufflackern eines Ladezustands. */
  initialPath: string;
  initialComponent: ComponentType;
}

function PageHost({ initialPath, initialComponent }: Omit<AppProps, "ssrPath">) {
  const [location] = useLocation();
  const path = normalizePath(location);
  const [page, setPage] = useState({ path: normalizePath(initialPath), Component: initialComponent });

  useEffect(() => {
    if (path === page.path) return;

    let cancelled = false;
    loadPage(path).then((Component) => {
      if (cancelled) return;
      setPage({ path, Component });
      window.scrollTo(0, 0);
    });
    return () => {
      cancelled = true;
    };
  }, [path, page.path]);

  // Bis der Chunk der Zielseite da ist, bleibt die alte Seite stehen. Das ist
  // ruhiger als ein Leerzustand und dauert bei diesen Chunkgrößen kaum messbar.
  const { Component } = page;
  return <Component />;
}

export default function App({ ssrPath, initialPath, initialComponent }: AppProps) {
  return (
    <Router ssrPath={ssrPath}>
      <RouteMeta />
      <PageHost initialPath={initialPath} initialComponent={initialComponent} />
    </Router>
  );
}
