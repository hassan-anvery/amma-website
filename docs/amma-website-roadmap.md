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
- Work navigation with dropdown (desktop hover/focus, mobile expand/collapse) built and approved
- Homepage Work overview with five category cards built and approved
- Quilts archive page with progressive reveal built and approved
- Desktop and mobile QA completed for Phase 2 and Phase 3

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

**Status: Complete and approved.**

### Navigation

- Work functions as a dropdown trigger, not a standalone navigation destination
- On desktop: hovering or focusing Work opens the submenu
- On mobile: tapping Work expands or collapses the submenu
- The Work submenu contains five items, all linking to pages that exist:
  - Quilts
  - Bags
  - Pouches
  - Table Runners
  - Everyday Essentials
- Desktop and mobile navigation tested and approved

### Work Overview

- Five category cards are live in the homepage "All Works" section (`index.html#gallery`)
- Each card includes a category title, placeholder descriptive copy, and a link to the category page
- Representative images and final category descriptions are pending content (Suraiya's input needed)
- "Return to All Works" links on category pages correctly target this section

---

## 6. Phase 3 – Quilts Category Page

**Status: Complete and approved.**

### Quilts archive (quilts.html)

- Text-only archive listing all 26 quilts; images to be added when ready
- Layout: rows of three on desktop; two-column and single-column at smaller sizes
- Four quilts visible on initial load
- "View More Quilts" reveals four additional quilts per click
- Previously revealed quilts remain visible
- "View More Quilts" disappears after all 26 quilts are revealed
- "Back to Top" appears only after all 26 quilts are revealed
- "Back to Top" scrolls to the top of the archive
- "Return to All Works" links back to the homepage gallery section
- Progressive reveal tested and approved at mobile sizes
- Quilt cards do not yet link to individual pages

### Other category pages

Bags, Pouches, Table Runners, and Everyday Essentials have placeholder "coming soon" pages. They are reachable from the navigation but are not developed archives. Their equivalent Phase 3 work is still ahead.

When images are added to quilt cards:
- Each card should show the main image, title, and any available metadata (size, time to make)
- Hide metadata fields gracefully if not yet available — do not show placeholder text
- Only link a quilt card to a detail page when a detail page exists

---

## 7. Phase 4 – Individual Quilt Pages

**Status: Active phase.**

### Pilot page

Daniyaal's Childhood has been selected and approved as the pilot individual quilt page. The pilot will establish the reusable detail-page pattern for all future quilt pages. Each subsequent page requires Suraiya's content and design approval before going public.

Once the pilot is approved, the pattern will be applied to the remaining three written-up quilts in this order:

1. Rings of Terracotta
2. Stories of Love
3. Zikr Series: Evening Tea in the Indoor Veranda

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
- Build a Table Runners page
- Build an Everyday Essentials page; consider possible subgroups:
  - Wall hangings
  - Coasters
  - Book sleeves
  - Jewelry pouches
- Do not build complex product or shop behavior until Suraiya has approved the overall structure and scope

---

## 9. Phase 6 – Featured Works

**Status: Pending.** Suraiya has not yet made her final selection of three featured works. This phase will begin after that selection is made.

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

1. Prepare and verify the content and selected photographs for Daniyaal's Childhood
2. Build the pilot individual quilt page on its own feature branch
3. Review the pilot locally on desktop and mobile
4. Obtain Suraiya's approval
5. Deploy only after approval
6. Use the approved pattern for the remaining written-up quilts
7. Finalize the three homepage Featured Works afterward

---

## 14. Open Questions / Decisions Needed From Suraiya

- **Category descriptions** — Final copy for each of the five Work category cards (Quilts, Bags, Pouches, Table Runners, Everyday Essentials)
- **Featured Works selection** — Which three works should appear on the homepage?
- **Size and time-to-make metadata** — Can Suraiya provide or confirm these for the 26 quilts?
- **Main image choices** — Final selection between `main-1.jpg` and `main-2.jpg` for `khalas-quilts` and `tashas-embrace`
- **Works without write-ups** — Should quilt cards link to pages even when no write-up is available, or only when a write-up exists?
- **Shop and commission scope** — What should the Shop or Commissions section look like, and when?
- **Exhibitions** — Are there past or upcoming exhibitions to document?
