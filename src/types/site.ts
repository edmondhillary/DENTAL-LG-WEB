export type NavItem = {
  label: string;
  href: string;
};

export type Treatment = {
  slug: string;
  name: string;
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
