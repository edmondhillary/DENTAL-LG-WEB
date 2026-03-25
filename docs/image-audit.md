# Image Audit

## Goal
Create a practical review of the main image blocks currently used in the site and suggest what kind of photo should replace or reinforce each one.

## How to use this file
- Keep the **section / file / current image role / recommended replacement** structure.
- When the clinic chooses a better image, replace the URL in the referenced file or move the asset to `/public/...`.
- Prefer local assets for real clinic content and final production quality.

---

## 1. Home

### Hero
- **File:** `src/components/site-sections.tsx`
- **Current role:** premium clinic / smiling patient hero
- **Recommendation:** keep premium portrait style, but if replaced use a real clinic hero image with calm facial expression, not stock laughter.

### Why choose us
- **File:** `src/components/site-sections.tsx`
- **Current role:** technology / clinic environment
- **Recommendation:** use a real image of scanning, diagnosis screen, or clinician reviewing treatment plan.

### Testimonials avatars
- **File:** `src/components/site-sections.tsx`
- **Current role:** generic portrait support
- **Recommendation:** if real patient images are not available, keep neutral portraits. If available, switch to approved testimonial portraits.

### Final CTA texture image
- **File:** `src/components/site-sections.tsx`
- **Current role:** decorative premium texture
- **Recommendation:** replace with clinic interior detail, premium macro of instruments, or keep as abstract editorial background.

---

## 2. Treatments page

### Hero
- **File:** `src/app/tratamientos/page.tsx`
- **Current role:** premium consultation image
- **Recommendation:** use an actual dentist-patient consultation scene or planning session image.

### Featured cosmetic cards
- **File:** `src/app/tratamientos/page.tsx`
- **Current blocks:**
  - Carillas de porcelana
  - Blanqueamiento boutique
  - Ortodoncia invisible
- **Recommendation:**
  - carillas -> natural close-up smile
  - blanqueamiento -> bright natural smile, not generic clinic stock
  - ortodoncia -> clean aligner / smile image

### Implants feature card
- **File:** `src/app/tratamientos/page.tsx`
- **Current role:** local 3D implant technical illustration
- **Recommendation:** keep this if the clinic wants a technical look. Otherwise replace with approved 3D render or branded illustration.

### CTA image
- **File:** `src/app/tratamientos/page.tsx`
- **Current role:** premium clinician portrait
- **Recommendation:** use a real clinician image or treatment-room planning image.

---

## 3. Treatment detail pages

### Dynamic treatment hero and detail image
- **Files:**
  - `src/data/treatment-catalog.ts`
  - `src/app/tratamientos/[slug]/page.tsx`
- **Current role:** category-based generic hero/detail imagery
- **Recommendation:**
  - Implantology -> 3D planning / implant workflow
  - Orthodontics -> aligners / digital planning
  - Aesthetic dentistry -> natural close-up smiles
  - Periodontics -> clinical but clean gum-care imagery
  - Pediatric -> friendly child-safe dental scene

---

## 4. Philosophy / About page

### Hero image
- **File:** `src/app/sobre-nosotros/page.tsx`
- **Current role:** clinic-modern editorial image
- **Recommendation:** use a real reception / premium consultation room if available.

### Story section image
- **File:** `src/app/sobre-nosotros/page.tsx`
- **Current role:** clinician reviewing scan
- **Recommendation:** good direction. Can be replaced by a real diagnostic / planning image from the clinic.

### “Diseñada para restaurar” gallery
- **File:** `src/app/sobre-nosotros/page.tsx`
- **Current role:** interior / clinic spaces mosaic
- **Recommendation:** ideal place for real clinic photos:
  - consultation room
  - treatment room
  - reception
  - digital lab / scanner area

### Team hero image
- **File:** `src/app/sobre-nosotros/page.tsx`
- **Current role:** team/clinic scene
- **Recommendation:** use a real team photo when available.

---

## 5. Testimonials page

### Hero / support portraits
- **File:** `src/app/testimonios/page.tsx`
- **Current role:** patient-like editorial portraits
- **Recommendation:** replace with approved patient portraits or keep neutral editorial images if legal/privacy constraints exist.

---

## 6. Case studies / Results

### Archive cards
- **Files:**
  - `src/app/antes-y-despues/archive-client.tsx`
  - `src/data/case-studies.json`
- **Current role:** before/after and hero imagery per case
- **Recommendation:**
  - move all real case photos to `/public/cases/...`
  - keep one hero style consistent across all cases if desired
  - use real before/after photos only when approved and properly cropped

### Case detail pages
- **Files:**
  - `src/app/antes-y-despues/[slug]/page.tsx`
  - `src/data/case-studies.json`
- **Recommendation:**
  - hero image = consistent editorial/clinical background
  - before / after = real case evidence
  - gallery = supporting progress or detail shots

---

## 7. Blog

### Blog hero / featured article images
- **Files:**
  - `src/app/blog/page.tsx`
  - `src/data/site.ts`
- **Recommendation:** use category-aligned covers:
  - implant posts -> planning / implant visuals
  - orthodontics -> aligners / smile progression
  - gum care -> professional hygiene / periodontal visuals

---

## 8. Recommended future image strategy

### Best production path
1. Keep stock images only as placeholders.
2. Move approved real clinic photos to:
   - `/public/clinic/...`
   - `/public/cases/...`
   - `/public/team/...`
3. Keep file naming explicit:
   - `clinic-hero-consultation.jpg`
   - `case-0744-before.jpg`
   - `case-0744-after.jpg`
   - `team-group-hero.jpg`

### Priority replacements
1. Philosophy gallery (`sobre-nosotros`)
2. Case studies images (`antes-y-despues`)
3. Treatments feature cards
4. Team image
5. Testimonials portraits

---

## 9. Notes for the clinic

- Use horizontal hero photos when the section needs editorial impact.
- Use vertical smile / patient photos for cards and testimonial blocks.
- Use real before/after photos only if approved and anonymized where needed.
- Avoid photos with exaggerated whitening, artificial expressions, or obviously fake stock interactions.
