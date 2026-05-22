# Website Content & Service Naming Update

## What & Why
Apply a batch of content corrections and rebranding changes across the website — removing "Einlagerung" from the hero subtitle, updating opening hours, renaming the Felgen service to "Felgen Smart Repair" with legally safe wording (no "Lackierung"), renaming the Bremssattel service to cosmetic-only wording, adding a same-day benefit, and updating the Reifenwechsel description with a budget-friendly sentence. Routes and layout are unchanged.

## Critical constraints (must be respected by executor)
- **Hero H1 headline is untouchable.** The text "Premium Reifen- & Felgenservice in Wuppertal" in the `<h1>` tag must not be altered in any way — not even capitalisation or word order. Only the subtitle paragraph beneath it may be modified.
- **"Lackierung" is banned from Felgen Smart Repair** on every surface: service card description, detail page title/intro/body/benefits/process/FAQ, SEO `<title>`, meta description, alt text. Replace with: "optische Aufbereitung", "farbliche Veredelung", or "professionelle Reparatur".
- **Bremssattel service must use strictly neutral cosmetic language.** The words "Lackierung", "Lack", "lackieren", "paint", and any synonym implying a meisterpflichtige or technical paint job are completely forbidden in the service card, detail page (title, intro, description, benefits, process, FAQ), SEO `<title>`, meta description, and AGB. Only these approved terms may be used: "optische Aufbereitung", "farbliche Veredelung", "visuelle Aufwertung", "Reinigung und optische Veredelung". The description must be purely appearance-focused — no wording that could imply structural or technical work on the brake system.
- **Slugs stay unchanged.** `/leistungen/felgen-instandsetzung` and `/leistungen/bremssattel-lackierung` must continue to resolve correctly.

## Done looks like
- Hero H1 reads exactly as before — no change whatsoever
- Hero subtitle no longer contains "Einlagerung"; surrounding sentence reads naturally and keeps premium tone
- Opening hours are updated in the contact section, footer, and any business info blocks to: Mo–Fr 09:00–18:00, Sa 09:00–15:00, So Geschlossen
- Felgen service card on homepage reads "Felgen Smart Repair" — "Felgen Instandsetzung" is gone
- Felgen detail page title, intro, body, benefits, process, FAQ, SEO title, and meta description all say "Felgen Smart Repair" and contain zero instances of "Lackierung"
- Bremssattel service card and detail page read "Optische Aufbereitung von Bremssätteln" — "Bremssattel-Lackierung" is gone from card, detail page, SEO meta, and AGB
- Bremssattel detail page description and FAQ use only cosmetic/visual language — no wording implies structural or meisterpflichtige brake work
- "Bearbeitung am selben Tag möglich" appears as a benefit on the Bremssattel detail page and as a subtle secondary line on its homepage service card
- Reifenwechsel detail page description includes a naturally integrated sentence about budget-friendly solutions without sounding cheap
- All routes work; homepage card titles match detail page titles exactly; no old naming remains anywhere; mobile layout unchanged

## Out of scope
- Changing the hero H1 headline in any way
- Modifying layout, design, or visual structure of any section
- Modifying the Google Maps embed
- Changes to unaffected pages (Impressum, Datenschutz, Pannendienst, Reifenmontage, Auswuchten, ReifenAnVerkauf)
- Adding or removing navigation items

## Tasks

1. **Clean hero subtitle and remove "Einlagerung"** — Edit only the subtitle paragraph beneath the H1 in Home.tsx. Remove "Einlagerung", adjust the sentence so it reads naturally, maintains premium tone, and is SEO-friendly. Do not touch the H1 tag or any other hero content. Also remove "Einlagerung" from any other surfaces (meta tags, JSON-LD structured data) where it appears.

2. **Update opening hours everywhere** — In ContactForm.tsx and any footer or business-info blocks that show hours, replace the current schedule with: Mo–Fr 09:00–18:00, Sa 09:00–15:00, So Geschlossen. Also update index.html JSON-LD structured data if opening hours are declared there.

3. **Rename Felgen service → Felgen Smart Repair and strip all "Lackierung" wording** — Update the service title in storage.ts (slug stays `felgen-instandsetzung`). In FelgenInstandsetzung.tsx, update the page title, SEO `<title>`, meta description, Open Graph tags, intro, description body, every benefit, every process step, and every FAQ answer — removing every instance of "Lackierung" and replacing it with "optische Aufbereitung", "farbliche Veredelung", or "professionelle Reparatur" as appropriate. Do not touch the H1 hero headline.

4. **Rename Bremssattel service → Optische Aufbereitung von Bremssätteln and rewrite with strictly approved language** — Update the service title in storage.ts (slug stays `bremssattel-lackierung`). In BremssattelLackierung.tsx, update the SEO `<title>`, meta description, Open Graph tags, page title, intro, description, benefits, process steps, and FAQ. Every piece of text must use only these approved terms: "optische Aufbereitung", "farbliche Veredelung", "visuelle Aufwertung", "Reinigung und optische Veredelung". The words "Lackierung", "Lack", "lackieren", and any paint-job synonyms are strictly forbidden — even in FAQs or indirect phrasing. The service must read as a purely cosmetic, appearance-focused offering. Also update the AGB.tsx service reference.

5. **Add same-day benefit to Bremssattel service** — Add "Bearbeitung am selben Tag möglich" to the benefits list in BremssattelLackierung.tsx. On the homepage service card (via storage.ts description or ServiceCard component), add it as a subtle secondary line that does not disrupt the card layout.

6. **Add budget sentence to Reifenwechsel page** — In the Reifenwechsel detail page, integrate naturally: "Auch für Kunden mit kleinerem Budget bieten wir passende und zuverlässige Lösungen an." — blending with the existing premium tone and not sounding discount-focused.

7. **QA pass** — Verify: H1 headline unchanged, no "Einlagerung" anywhere, no "Lackierung" in Felgen or Bremssattel texts, all slugs/routes still resolve, card titles match detail page titles exactly, mobile layout unaffected. Run e2e tests covering the homepage, service cards, and both renamed detail pages.

## Relevant files
- `client/src/pages/Home.tsx:65-68`
- `client/src/components/ContactForm.tsx:58-66`
- `client/index.html`
- `server/storage.ts:55-70`
- `client/src/pages/leistungen/FelgenInstandsetzung.tsx`
- `client/src/pages/leistungen/BremssattelLackierung.tsx`
- `client/src/pages/AGB.tsx:38-40`
- `client/src/components/ServiceCard.tsx`
