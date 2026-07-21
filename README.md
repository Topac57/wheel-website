# ReifenDrive – reifendrive.de

Website der Reifenwerkstatt ReifenDrive (Taha Taleb) in Wuppertal-Vohwinkel.
Einziges Ziel der Seite: **Anrufe vom Handy**. 95 % der Besucher kommen per
Smartphone, viele mit einem platten Reifen am Straßenrand.

---

## ⚠️ Was nicht kaputtgehen darf

Diese vier Punkte hängen direkt an der Erfolgsmessung und am Umsatz. Wer sie
ändert, macht die Google-Ads-Kampagne blind, ohne dass es sofort auffällt.

1. **Google Tag Manager `GTM-N2ZQ5VLZ`** muss unverändert im `<head>` von
   `client/index.html` bleiben (plus das `<noscript>`-Fallback im `<body>`).
2. **Telefon-Links müssen echte `<a href="tel:+491637947079">` bleiben.**
   Niemals durch `<button onClick=...>` ersetzen — daran hängt die
   Click-to-Call-Conversion in Google Ads. Alle Anruf-Links laufen deshalb über
   `client/src/components/CallLink.tsx`.
3. **Die Nummer muss als `0163 794 70 79` im Text stehen** (mit genau diesen
   Leerzeichen). Die Google-Weiterleitungsnummer tauscht dieses Muster
   automatisch aus; eine andere Schreibweise wird nicht erkannt.
4. **Der sichtbare Bereich muss ohne JavaScript funktionieren.** Prüfen mit:

   ```bash
   npm run build
   grep -c 'href="tel:+491637947079"' dist/public/index.html   # muss > 0 sein
   ```

   Im Browser: JavaScript deaktivieren, Startseite laden — Überschrift,
   Telefonnummer und Anruf-Button müssen sichtbar und klickbar sein.

---

## Geschäftsdaten

Alle Angaben (Adresse, Öffnungszeiten, Bewertungen, Preisanker) stehen an genau
einer Stelle: **`client/src/lib/business.ts`**. Sie sind gegen das
Google-Unternehmensprofil abgeglichen und müssen dort zeichengleich sein —
Abweichungen schaden dem lokalen Ranking.

Ändert sich etwas: **zuerst im Google-Profil ändern, dann hier nachziehen.**

Die Sterne-Bewertung steht bewusst nur als sichtbarer Text auf der Seite und
**nicht** als `aggregateRating` im JSON-LD: Fremde Bewertungen als eigene
Auszeichnung auszuzeichnen verstößt gegen Googles Richtlinien.

---

## Architektur

Statische Seite, beim Build vollständig vorgerendert. Es gibt **kein Backend**
und keine Datenbank.

```
npm run build
  1. build:client     vite build            → Browser-Bündel + HTML-Vorlage
  2. build:server     vite build --ssr      → dist/server/entry-server.js
  3. build:prerender  node scripts/prerender.mjs
                      → je Route eine fertige index.html in dist/public/
```

Das ausgelieferte HTML enthält den kompletten Seiteninhalt. Das JavaScript
hydriert die Seite danach nur noch — für den Anruf ist es nicht nötig.

| Datei | Zweck |
|---|---|
| `client/src/lib/business.ts` | Geschäftsdaten, Öffnungsstatus-Logik |
| `client/src/lib/seo.ts` | Titel, Beschreibung und Preload-Bild je Route |
| `client/src/pages/registry.ts` | Routentabelle mit dynamischen Imports (Code-Splitting) |
| `client/src/pages/registry.server.ts` | dieselbe Tabelle mit statischen Imports (nur fürs Vorrendern) |
| `scripts/prerender.mjs` | erzeugt die HTML-Dateien |
| `scripts/optimize-images.mjs` | einmalig: Bilder → WebP nach `client/public/img/` |

Die beiden Routentabellen müssen deckungsgleich bleiben; der Build bricht sonst
mit einer Fehlermeldung ab. Ebenso, wenn einer Route der Eintrag in `seo.ts`
fehlt.

### Eine neue Seite hinzufügen

1. Komponente unter `client/src/pages/` anlegen
2. Pfad in `registry.ts` **und** `registry.server.ts` eintragen
3. Titel + Beschreibung in `lib/seo.ts` ergänzen
4. `npm run build` — der Build meckert, falls etwas fehlt

---

## Entwicklung

```bash
npm install
npm run dev        # Vite-Devserver
npm run check      # TypeScript
npm run build      # vollständiger Build inkl. Vorrendern
```

Bilder neu erzeugen (nur nötig, wenn Quellbilder wechseln):

```bash
npm run optimize-images
```

## Deployment

Vercel, statisch aus `dist/public`. Push auf `main` geht direkt live.

Konfiguration in `vercel.json`:

- `cleanUrls` + `trailingSlash: false` → `/impressum` statt `/impressum/index.html`
- `/assets/*` wird ein Jahr `immutable` gecacht: Diese Dateien tragen einen Hash
  im Namen, ändern sich also nie unter derselben Adresse.
- `/img/*` wird einen Tag gecacht mit `stale-while-revalidate`: feste Namen,
  aber austauschbarer Inhalt.

**`vercel.json` verträgt keine Kommentare und keine unbekannten Schlüssel.**
Vercel prüft die Datei streng gegen ein Schema (`additionalProperties: false`)
und bricht das Deployment sonst ab, bevor der Build überhaupt startet — der
Fehler taucht dann nur als roter Haken am Commit auf, nicht im Build-Log.
Vor dem Push prüfen:

```bash
curl -sS https://openapi.vercel.sh/vercel.json -o /tmp/vschema.json
python3 -c "
import json
cfg, s = json.load(open('vercel.json')), json.load(open('/tmp/vschema.json'))
allowed = set(s['properties']['headers']['items']['properties'])
print('unbekannte Schlüssel:', [set(h)-allowed for h in cfg['headers'] if set(h)-allowed] or 'keine')"
```
