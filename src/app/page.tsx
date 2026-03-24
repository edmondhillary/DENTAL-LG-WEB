import {
  BeforeAfterPreview,
  ContactSection,
  FaqPreview,
  FinalCta,
  FreeVisitBanner,
  HeroSection,
  HighlightsSection,
  LocationPreview,
  TestimonialsPreview,
  TreatmentsPreview,
  WhyChooseUsSection,
} from "@/components/site-sections";
import { TreatmentSearch } from "@/components/treatment-search";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <TreatmentsPreview />
      <TreatmentSearch />
      <WhyChooseUsSection />
      <BeforeAfterPreview />
      <TestimonialsPreview />
      <FreeVisitBanner />
      <FaqPreview />
      <ContactSection />
      <LocationPreview />
      <FinalCta />
    </>
  );
}
