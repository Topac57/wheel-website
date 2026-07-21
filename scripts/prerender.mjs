/**
 * Rendert jede Route beim Build zu fertigem HTML.
 *
 * Vorher wurde die komplette Seite erst im Browser aus einem großen
 * JavaScript-Bündel zusammengebaut — das ausgelieferte HTML war leer. Wer mit
 * einem platten Reifen am Straßenrand steht und eine wacklige Mobilfunk-
 * verbindung hat, sah dadurch sekundenlang eine weiße Seite.
 *
 * Nach diesem Schritt steht der gesamte Seiteninhalt inklusive Überschrift,
 * Telefonnummer und Anruf-Button im Quelltext. Das JavaScript hydriert die
 * Seite danach nur noch — es ist für den Anruf nicht mehr nötig.
 *
 * Läuft als dritter Schritt von `npm run build`:
 *   1. vite build            → Browser-Bündel + dist/public/index.html (Vorlage)
 *   2. vite build --ssr      → dist/server/entry-server.js
 *   3. node scripts/prerender.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "dist", "public");

const { render, routes, metaFor, pageMeta } = await import(
  path.join(root, "dist", "server", "entry-server.js")
);

const template = await readFile(path.join(outDir, "index.html"), "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Platzhalter <!--app-html--> fehlt in client/index.html – Prerendering würde still ins Leere laufen.");
}

/** Ersetzt den Inhalt eines Tags, ohne den Rest der Vorlage anzufassen. */
function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Erwartetes Tag nicht gefunden: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

/** Schützt Text, der in ein HTML-Attribut geschrieben wird. */
function attr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

const siteUrl = "https://reifendrive.de";
let written = 0;

for (const route of routes) {
  const meta = metaFor(route);
  const canonical = route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`;

  let html = template.replace("<!--app-html-->", render(route));

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${attr(meta.title)}</title>`);
  html = replaceTag(
    html,
    /<meta name="description" content="[\s\S]*?" \/>/,
    `<meta name="description" content="${attr(meta.description)}" />`,
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[\s\S]*?" \/>/,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[\s\S]*?" \/>/,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
  );

  // Preload auf das Bild dieser Seite umbiegen — oder entfernen, wenn die Seite
  // gar kein großes Kopfbild hat (Impressum, AGB, Datenschutz, Pannendienst).
  const preloadTag = meta.preload
    ? `<link rel="preload" as="image" href="${attr(meta.preload.href)}"` +
      (meta.preload.srcset
        ? ` imagesrcset="${attr(meta.preload.srcset)}" imagesizes="100vw"`
        : "") +
      ` fetchpriority="high" />`
    : "";
  html = replaceTag(html, /<link rel="preload" as="image"[^>]*\/>/, preloadTag);

  const target = route === "/" ? path.join(outDir, "index.html") : path.join(outDir, route, "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, html);

  console.log(`  ${route.padEnd(38)} → ${path.relative(root, target)}`);
  written++;
}

// 404-Seite für unbekannte Pfade.
const notFoundHtml = template.replace("<!--app-html-->", render("/__not-found__"));
await writeFile(path.join(outDir, "404.html"), notFoundHtml);

console.log(`\n${written} Routen vorgerendert (+ 404.html).`);

// Ohne eigenen Eintrag bekäme eine neue Seite still den Standardtitel der
// Startseite — zwei Seiten mit identischem Titel schaden der Auffindbarkeit.
const missingMeta = routes.filter((route) => !pageMeta[route]);
if (missingMeta.length > 0) {
  throw new Error(
    `Für diese Routen fehlt ein Eintrag in client/src/lib/seo.ts: ${missingMeta.join(", ")}`,
  );
}
