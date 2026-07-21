import { renderToString } from "react-dom/server";
import App from "./App";
import NotFound from "./pages/not-found";
import { routePaths } from "./pages/registry";
import { pageComponents } from "./pages/registry.server";
import { metaFor, pageMeta } from "./lib/seo";

/**
 * Wird ausschließlich beim Vorrendern in Node ausgeführt, nie im Browser.
 */

// Die beiden Routentabellen müssen deckungsgleich sein: Steht eine Seite nur in
// registry.server.ts, würde sie zwar als HTML erzeugt, im Browser aber beim
// Hydrieren als 404 enden — ein Fehler, der erst beim Klicken auffiele.
const serverPaths = Object.keys(pageComponents);
const onlyOnServer = serverPaths.filter((p) => !routePaths.includes(p as never));
const onlyOnClient = routePaths.filter((p) => !serverPaths.includes(p));

if (onlyOnServer.length > 0 || onlyOnClient.length > 0) {
  throw new Error(
    "Routentabellen laufen auseinander. " +
      `Nur in registry.server.ts: [${onlyOnServer.join(", ")}]. ` +
      `Nur in registry.ts: [${onlyOnClient.join(", ")}].`,
  );
}

export function render(url: string): string {
  const Component = pageComponents[url] ?? NotFound;
  return renderToString(<App ssrPath={url} initialPath={url} initialComponent={Component} />);
}

export const routes = serverPaths;
export { metaFor, pageMeta };
