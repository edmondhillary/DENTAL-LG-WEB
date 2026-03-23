import {
  BeforeAfterPreview,
  BlogPreview,
  ContactSection,
  FaqPreview,
  FinalCta,
  HeroSection,
  HighlightsSection,
  LocationPreview,
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
      <BlogPreview />
      <FaqPreview />
      <LocationPreview />
      <ContactSection />
      <FinalCta />
    </>
  );
}
