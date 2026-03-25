export type NavItem = {
  label: string;
  href: string;
};

export type Treatment = {
  slug: string;
  name: string;
  category: string;
  startingPrice?: number | string | null;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  benefits: string[];
  idealFor: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  beforeAfter: { title: string; description: string; image: string }[];
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
};

export type Testimonial = {
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  source?: string;
  avatar?: string;
  publishedAt?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover: string;
  readTime: string;
  content: string[];
};

export type BeforeAfterCase = {
  title: string;
  treatment: string;
  outcome: string;
  image: string;
};

export type GlobalFaq = {
  question: string;
  answer: string;
};

export type PricingItem = {
  name: string;
  price: number | string | null;
};

export type PricingGroup = {
  title: string;
  slug: string;
  items: PricingItem[];
};

export type CatalogTreatment = {
  slug: string;
  name: string;
  category: string;
  groupSlug: string;
  groupTitle: string;
  price: number | string | null;
  shortDescription: string;
  heroImage: string;
  heroAlt: string;
};

export type CatalogTreatmentGroup = {
  title: string;
  slug: string;
  items: CatalogTreatment[];
};
