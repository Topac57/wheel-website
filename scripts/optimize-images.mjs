/**
 * Lädt die externen Bilder einmalig herunter und legt sie als lokale WebP-Dateien
 * unter client/public/img/ ab. Danach liefert die Seite alle Bilder von der
 * eigenen Domain aus – kein Fremd-Host im kritischen Ladepfad.
 *
 * Einmalig ausführen:  node scripts/optimize-images.mjs
 * (Die erzeugten .webp-Dateien werden mit eingecheckt, der Build braucht dieses
 *  Skript nicht.)
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "client", "public", "img");

/** name -> Quelle. `widths` erzeugt zusätzlich Varianten für srcset. */
const sources = [
  { name: "hero-werkstatt", url: "https://i.imgur.com/cpFX64f.png", widths: [768, 1280, 1920], quality: 72 },
  { name: "reifenwechsel", url: "https://i.imgur.com/KYSBCNi.jpeg", widths: [800], quality: 68 },
  { name: "reifenmontage", url: "https://i.imgur.com/RztsjSj.jpeg", widths: [800], quality: 68 },
  { name: "auswuchten", url: "https://i.imgur.com/fiwh1Hk.jpeg", widths: [800], quality: 68 },
  { name: "bremssattel", url: "https://i.imgur.com/oQV4knw.jpeg", widths: [800], quality: 68 },
  { name: "felgen-smart-repair", url: "https://i.imgur.com/IZqqFth.jpeg", widths: [800], quality: 68 },
  { name: "reifen-an-verkauf", url: "https://i.imgur.com/P54z2O0.jpeg", widths: [800], quality: 68 },
  { name: "logo-reifendrive", file: "attached_assets/logo-taleb_1769854324948.png", widths: [420], quality: 82 },
];

async function load(entry) {
  if (entry.file) {
    return sharp(path.join(root, entry.file));
  }
  const res = await fetch(entry.url);
  if (!res.ok) throw new Error(`${entry.url} -> HTTP ${res.status}`);
  return sharp(Buffer.from(await res.arrayBuffer()));
}

await mkdir(outDir, { recursive: true });

for (const entry of sources) {
  const input = await load(entry);
  const meta = await input.metadata();

  for (const width of entry.widths) {
    if (width > meta.width) continue; // nie hochskalieren
    const suffix = entry.widths.length > 1 ? `-${width}` : "";
    const target = path.join(outDir, `${entry.name}${suffix}.webp`);
    const buf = await input
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: entry.quality, effort: 6 })
      .toBuffer();
    await writeFile(target, buf);
    console.log(`${path.relative(root, target).padEnd(46)} ${String(Math.round(buf.length / 1024)).padStart(5)} KB`);
  }
}
