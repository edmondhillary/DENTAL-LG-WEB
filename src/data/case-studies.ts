import type { CaseStudy } from "@/types/site";
import caseStudiesData from "./case-studies.json";

/**
 * INSTRUCTIONS FOR CLINIC CONTENT EDITING
 * --------------------------------------
 * 1. Edit the content in `src/data/case-studies.json`.
 * 2. Keep these keys in every case:
 *    slug, caseCode, category, treatment, title, summary, problem,
 *    arrivalState, solution, result, duration, precision,
 *    heroImage, beforeImage, afterImage, gallery.
 * 3. Do NOT rename keys unless the developer updates the app code too.
 * 4. Images can be external URLs or local files under `/public/cases/...`.
 * 5. Recommended local naming example:
 *    /cases/caso-0744-hero.jpg
 *    /cases/caso-0744-before.jpg
 *    /cases/caso-0744-after.jpg
 *    /cases/caso-0744-gallery-1.jpg
 * 6. `alt` text should describe what is visible in the image, briefly and clearly.
 */
export const caseStudies = caseStudiesData as CaseStudy[];

export const caseStudyCategories = ["Todos", "Implantes", "Carillas", "Ortodoncia", "Estética"] as const;

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}
