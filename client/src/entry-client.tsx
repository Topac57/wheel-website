import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { loadPage } from "./pages/registry";
import "./index.css";

/**
 * Das ausgelieferte HTML ist bereits vollständig vorgerendert — Überschrift,
 * Telefonnummer und Anruf-Button stehen im Quelltext und funktionieren auch
 * ganz ohne dieses Skript. Hier wird nur noch nachträglich hydriert, damit
 * Menü, Öffnungsstatus und Seitenwechsel interaktiv werden.
 */
async function start() {
  const path = window.location.pathname;
  // Erst den Chunk der aktuellen Seite laden, dann hydrieren: sonst würde der
  // erste Client-Render nicht zum vorgerenderten HTML passen.
  const Component = await loadPage(path);

  hydrateRoot(
    document.getElementById("root")!,
    <App initialPath={path} initialComponent={Component} />,
  );
}

start();
