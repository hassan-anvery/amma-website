# Amma Website Roadmap
## Suraiya Anvery Quilting Portfolio

---

## 1. Project Purpose

This website is a quilting portfolio for Suraiya Anvery. It is being built as a gift and as a long-term archive of her creative work.

The site should prioritize:

- Timeless design over trends
- Simplicity over unnecessary complexity
- Accessibility by default
- Performance over heavy visual effects
- Clean, maintainable code

Suraiya's approval is required before any meaningful public content or design changes go live. Nothing significant should be published without her review.

---

## 2. Current Completed Foundation

The following has been completed as of the time of this document:

- Stable Git workflow using feature branches, with `main` as the always-deployable branch
- Work archive folder structure created under `assets/images/work/`
- Quilt image archive normalized: 26 quilt folders, all lowercase kebab-case
- Images optimized from roughly 2.7 GB to roughly 621 MB using Python/Pillow (quality 85, max 2000px wide for main images, max 2400px wide for detail images)
- Raw image backup preserved outside the repo at a local source folder
- `.DS_Store` files ignored via `.gitignore`
- `content/work-inventory.md` exists as the planning and inventory source of truth
- `content/image-guidelines.md` exists documenting image conventions
- `content/writeups/quilts/` folder exists for write-up drafts
- Four quilt write-ups have source PDFs and extracted Markdown drafts:
  - Daniyaal's Childhood – A Visual Narrative
  - Rings of Terracotta
  - Stories of Love
  - Zikr Series: Evening Tea in the Indoor Veranda
- Zikr naming mismatch corrected: slug and folder renamed from `zikr-series-quiet-hours-of-the-morning` to `zikr-series-evening-tea-in-the-indoor-veranda`
- Visible website redesign has not yet started from this content archive

---

## 3. Guiding Principles

- **Suraiya approves before anything goes public.** She should review and sign off on design decisions, page content, and category structure before any changes are deployed.
- **Timeless design over trends.** The site should feel calm, considered, and professional — not fashionable in a way that ages badly.
- **Simplicity over complexity.** Do not add systems, frameworks, or features before they are genuinely needed.
- **Performance by default.** Optimized images, fast load times, no unnecessary JavaScript.
- **Accessibility by default.** Semantic HTML, proper alt text, readable contrast ratios, keyboard navigation.
- **Desktop and mobile both matter.** The site must work well across all screen sizes.
- **Clean, maintainable code.** Prefer readable CSS and HTML over clever shortcuts.
- **Preserve source images outside the repo.** Only commit optimized, website-ready images.
- **Do not over-engineer.** Three similar lines of code is better than a premature abstraction.

---

## 4. Phase 1 – Content Archive and Inventory

**Status: Mostly complete.**

### Completed

- Work folder structure created under `assets/images/work/`
- Quilt image folders created and normalized (26 quilts)
- Images optimized for web delivery
- `content/work-inventory.md` tracking all known works
- Source PDFs stored in `content/writeups/quilts/source-pdfs/`
- Markdown write-up drafts extracted for four quilts
- Zikr naming corrected throughout the archive

### Remaining

- Final audit of the content archive after all current PRs are merged
- Choose one main image for `khalas-quilts` (currently has `main-1.jpg` and `main-2.jpg`)
- Choose one main image for `tashas-embrace` (currently has `main-1.jpg` and `main-2.jpg`)
- Add remaining quilts as Suraiya provides them
- Add future write-up PDFs and extract Markdown drafts as they become available
- Add size and time-to-make metadata to the inventory where available

---

## 5. Phase 2 – Navigation and Work Overview

This is the next phase of visible website work.

### Navigation Changes

- Update Work navigation so that "Work" is a hover-only desktop heading, not a normal clickable link
- On desktop: hovering or focusing "Work" opens the dropdown
- On mobile: tapping "Work" expands or collapses the submenu
- Work dropdown categories:
  - Quilts
  - Bags
  - Pouches
  - Table Runners
  - Everyday Essentials
- Consider adding Exhibitions as a separate main navigation item (separate from the Work dropdown)
- Remove old labels: All Work, Small Works, Wall Hangings (as a top-level item), Runners

### Work Overview Page

- Replace the old "All Work" gallery with a Work overview page built from category cards
- One card per Work category:
  - Quilts
  - Bags
  - Pouches
  - Table Runners
  - Everyday Essentials
- Each category card should include:
  - One representative image
  - Category title
  - Short category description (needs Suraiya's input)
  - Link or button to that category page

---

## 6. Phase 3 – Quilts Category Page

- Build a Quilts grid page listing individual quilts
- Layout: rows of three on desktop; mobile-friendly responsive layout
- Each quilt card should show:
  - Main image
  - Title
  - Size (if available)
  - Time to make (if available)
- If metadata fields are missing, hide them gracefully rather than showing placeholder text
- Display the first 6 quilts by default; "See more" reveals 3 additional quilts at a time
- Only link a quilt card to a detail page when a detail/write-up page exists — unless placeholder pages are explicitly approved by Suraiya

---

## 7. Phase 4 – Individual Quilt Pages

Start with the four quilts that already have write-up drafts:

1. Daniyaal's Childhood – A Visual Narrative
2. Rings of Terracotta
3. Stories of Love
4. Zikr Series: Evening Tea in the Indoor Veranda

### Page Structure

Each individual quilt page should include:

- Main image (full-width or large featured)
- Title
- Size and time-to-make metadata (if available)
- Suraiya's write-up text
- Detail image gallery
- Back to Quilts link

### Design Direction

- Editorial feeling, calm and considered — similar in spirit to thoughtful quilt blog pages, but simpler and aligned with the Amma website design language
- Create a reusable detail page pattern that can be applied to future works with minimal effort

---

## 8. Phase 5 – Bags, Pouches, Table Runners, Everyday Essentials

- Build a Bags category page using the same grid logic as Quilts
- Build a Pouches page once titles and types are finalized with Suraiya
- Build a Table Runners page — note: consider whether Zikr Series: Evening Tea in the Indoor Veranda belongs under Table Runners rather than (or in addition to) Quilts
- Build an Everyday Essentials page; consider possible subgroups:
  - Wall hangings
  - Coasters
  - Book sleeves
  - Jewelry pouches
- Do not build complex product or shop behavior until Suraiya has approved the overall structure and scope

---

## 9. Phase 6 – Featured Works

- The homepage Featured Works section should display three selected pieces
- Each card should include:
  - Main image
  - Title
  - One short extra field (chosen by Suraiya — e.g. a short quote, a note about materials, or occasion)
  - A "Continue Reading" or "View Work" button
- The three featured works are subject to change at Suraiya's discretion
- Good initial candidates are the four works with completed write-ups, but Suraiya should make the final selection

---

## 10. Phase 7 – Shop / Availability / Commissions

- Clarify what "Shop" should mean before building anything
- Possible Version 1 direction: an Available Works page or a Commission Inquiry form
- Avoid full ecommerce for now; it adds significant complexity and maintenance burden
- Future possibilities (to be decided with Suraiya):
  - Available works listing
  - Commission inquiry form
  - Patterns for sale
  - Workshops or classes
  - Online shop (if demand warrants it)
  - Testimonials

---

## 11. Phase 8 – QA, Review, and Approval

Before anything goes live publicly, the following should be completed:

- Desktop QA across browsers
- Mobile QA across devices
- Navigation QA (hover, tap, keyboard)
- Image loading and performance review
- Accessibility review (alt text, contrast, keyboard navigation)
- Broken link check
- Netlify deploy preview review
- Prepare review materials for Suraiya
- Suraiya approves the site before public deployment

---

## 12. Long-Term Roadmap

The following are future possibilities, to be considered as the site grows:

- Individual pages for all works across all categories
- Exhibitions section documenting public shows and community art events
- Process stories or behind-the-scenes write-ups
- Blog or journal posts
- Workshops or class listings
- Pattern sales
- Online shop (if appropriate)
- Testimonials
- Search and filtering for the work archive
- Consider migrating to a static site generator (e.g. Eleventy or Astro) if the hand-maintained HTML becomes hard to scale

---

## 13. Recommended Immediate Next Steps

1. Sync `main` locally after all current PRs are merged
2. Run a full content archive audit — verify all 26 quilt folders, confirm inventory matches filesystem
3. Resolve main image selection for `khalas-quilts` and `tashas-embrace`
4. Build updated Work navigation (hover dropdown, mobile expand/collapse) and Work overview category cards
5. Build the Quilts grid category page
6. Build the first four individual quilt detail pages using the write-up drafts already in place

---

## 14. Open Questions / Decisions Needed From Suraiya

- **Category descriptions** — Short descriptions for each Work category card (Quilts, Bags, Pouches, Table Runners, Everyday Essentials)
- **Featured Works selection** — Which three works should appear on the homepage?
- **Zikr classification** — Does Zikr Series: Evening Tea in the Indoor Veranda belong under Quilts, Table Runners, or both?
- **Size and time-to-make metadata** — Can Suraiya provide or confirm these for the 26 quilts?
- **Main image choices** — Final selection between `main-1.jpg` and `main-2.jpg` for `khalas-quilts` and `tashas-embrace`
- **Works without write-ups** — Should quilt cards link to pages even when no write-up is available, or only when a write-up exists?
- **Shop and commission scope** — What should the Shop or Commissions section look like, and when?
- **Exhibitions** — Are there past or upcoming exhibitions to document?
