import {
  BeforeAfterPreview,
  FinalCta,
  HeroSection,
  HighlightsSection,
  TeamPreview,
  TestimonialsPreview,
  TreatmentsPreview,
  WhyChooseUsSection,
} from "@/components/site-sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <TreatmentsPreview />
      <WhyChooseUsSection />
      <TestimonialsPreview />
      <BeforeAfterPreview />
      <TeamPreview />
      <FinalCta />
    </>
  );
}
