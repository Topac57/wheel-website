---
title: Website content & service naming update
---
# Website Content & Service Naming Update

## What & Why
Apply a batch of content corrections and rebranding changes across the full website: remove "Einlagerung" everywhere (including meta/SEO fields and structured data), revise opening hours, rename the Felgenservice to "Felgen Smartrepair", rename the Bremssattel service to legally safer cosmetic wording, add a same-day benefit, and update the Reifenwechsel page with a budget-friendly sentence — all while preserving existing routes and maintaining SEO consistency.

## Done looks like
- No mention of "Einlagerung" anywhere: visible UI, meta titles/descriptions, Open Graph tags, alt text, and JSON-LD structured data
- Opening hours updated everywhere (ContactForm.tsx, Map.tsx, JSON-LD in index.html) to: Mo–Fr 09:00–18:00, Sa 09:00–15:00, So Geschlossen
- Service card titles, detail page titles, SEO meta tags, and Open Graph tags all read "Felgen Smartrepair" — no "Felgen Instandsetzung" or "Felgenservice" remains
- Service card titles, detail page titles, SEO meta tags, and Open Graph tags all read "Optische Aufbereitung von Bremssätteln" — no "Bremssattel-Lackierung" remains anywhere (including AGB.tsx)
- Bremssattel detail page description, benefits, process steps, and FAQ use only cosmetic/visual language — no wording implies mechanical brake-system work or master-required repair
- "Bearbeitung am selben Tag möglich" appears on the Bremssattel detail page (as a benefit) and as a small, subtle badge or secondary line on the homepage service card — does not disrupt card layout
- Reifenwechsel detail page description naturally includes a sentence about budget-friendly solutions, consistent with the premium tone
- All existing URL slugs and routes continue to work — no broken links
- Homepage service card titles match their corresponding detail page titles exactly (no naming mismatch)
- storage.ts seed data updated to match all renamed titles (slugs are kept stable so routes don't break)
- Mobile layout unaffected; all pages pass a QA check for old naming, broken links, and navigation

## Out of scope
- Changing the visual layout or design of any section
- Modifying the Google Maps embed
- Any changes to unaffected pages (Impressum, Datenschutz, Pannendienst, Reifenmontage, Auswuchten, ReifenAnVerkauf)
- Adding or removing navigation items

## Tasks

1. **Remove "Einlagerung" from all surfaces** — In Home.tsx hero subtitle and anywhere else it appears (meta tags, alt texts, JSON-LD structured data), remove every instance of "Einlagerung" without leaving awkward gaps in the surrounding text.

2. **Update opening hours everywhere** — In ContactForm.tsx, Map.tsx, and the JSON-LD block in index.html, replace the existing schedule with: Mo–Fr 09:00–18:00, Sa 09:00–15:00, So Geschlossen.

3. **Rename Felgenservice → Felgen Smartrepair across all surfaces** — Update the service title in storage.ts (keeping slug stable), all text in FelgenInstandsetzung.tsx (page title, SEO `<title>`, meta description, Open Graph tags, intro, content), generic "Felgenservice" references in Home.tsx hero and Map.tsx tagline, and the homepage service card title. Ensure no instance of the old naming remains in any visible text or SEO field.

4. **Rename Bremssattel-Lackierung → Optische Aufbereitung von Bremssätteln across all surfaces** — Update the service title in storage.ts (keeping slug stable), all text in BremssattelLackierung.tsx (SEO `<title>`, meta description, Open Graph tags, page title, intro, description, benefits, process steps, FAQ). Rewrite the description to use only cosmetic/visual language — no wording implying structural brake repair. Also update AGB.tsx services list and the homepage service card title and description.

5. **Add same-day benefit to Bremssattel service** — Add "Bearbeitung am selben Tag möglich" to the benefits list on the detail page. On the homepage service card, add it as a subtle secondary line or small badge that does not disrupt the card layout or look like aggressive advertising.

6. **Add budget sentence to Reifenwechsel page** — Integrate a sentence along the lines of "Auch für Kunden mit kleinerem Budget bieten wir passende und zuverlässige Lösungen an." naturally into the service description, consistent with the premium tone of the rest of the page.

7. **QA pass** — After all changes, verify: no old service names remain in any file, all routes work (especially bremssattel-lackierung and felgen-instandsetzung slugs), homepage card titles match detail page titles exactly, and the mobile layout is unaffected. Run e2e tests covering navigation, service cards, and the renamed detail pages.

## Relevant files
- `client/src/pages/Home.tsx:58-68`
- `client/src/components/ContactForm.tsx:58-72`
- `client/src/components/Map.tsx:14-35`
- `client/index.html`
- `server/storage.ts:55-70`
- `client/src/pages/leistungen/FelgenInstandsetzung.tsx`
- `client/src/pages/leistungen/BremssattelLackierung.tsx`
- `client/src/pages/leistungen/Reifenwechsel.tsx:58-68`
- `client/src/pages/AGB.tsx:38-40`
- `client/src/App.tsx`
- `client/src/components/ServiceCard.tsx`