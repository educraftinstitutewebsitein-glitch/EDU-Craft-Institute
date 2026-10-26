export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initial: string;
  quote: string;
  rating: number;
  imagePath: string;
  tag: string;
  colorScheme: {
    avatarBg: string;
    borderHover: string;
    badgeBg: string;
  };
}

export interface StudentParentWallItem {
  name: string;
  initial: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "shahina-khatoon",
    name: "Shahina Khatoon",
    role: "Parent / Student Achiever",
    initial: "S",
    quote:
      "I highly recommend EDU-Craft Coaching Institute for anyone preparing for Best class results, any competitive exams, Olympiad etc. The faculty is incredibly supportive and ensures that every basic concept is crystal clear. The small batch size allowed for personalized doubt clearing sessions, which really boosted my confidence. The structured study material and regular mock tests are perfectly aligned with the latest exam pattern.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-shahina-khatoon.png",
    tag: "Exam & Olympiad Prep",
    colorScheme: {
      avatarBg: "bg-educraft-primary text-white",
      borderHover: "hover:border-educraft-primary",
      badgeBg: "bg-educraft-primary/10 text-educraft-primary",
    },
  },
  {
    id: "sk-sardar-son",
    name: "S.K. Sardar's Son",
    role: "Foundation & Board Student",
    initial: "S",
    quote:
      "The teachers of this coaching institute are very good in their respective subjects and act friendly with the students. They also provided me extra classes and extra care for my subjects when I needed. The best coaching experience I got till date.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-sk-sardar-son.png",
    tag: "Mentorship & Extra Care",
    colorScheme: {
      avatarBg: "bg-educraft-gold text-white",
      borderHover: "hover:border-educraft-gold",
      badgeBg: "bg-educraft-gold/15 text-educraft-primary",
    },
  },
  {
    id: "shreyasi-sammader",
    name: "Shreyasi Sammader",
    role: "Academic Achiever",
    initial: "S",
    quote:
      "The teachers don't just focus on rote learning; they actually make you understand the core concepts. The teaching methodology is excellent.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-shreyasi-sammader.png",
    tag: "Conceptual Learning",
    colorScheme: {
      avatarBg: "bg-[#1f375b] text-white",
      borderHover: "hover:border-[#1f375b]",
      badgeBg: "bg-blue-50 text-blue-900",
    },
  },
  {
    id: "samudra-halder",
    name: "Samudra Halder",
    role: "Student",
    initial: "S",
    quote: "Perfect faculty, absolutely love the institute, helped me pass.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-samudra-halder.png",
    tag: "Academic Success",
    colorScheme: {
      avatarBg: "bg-emerald-600 text-white",
      borderHover: "hover:border-emerald-600",
      badgeBg: "bg-emerald-50 text-emerald-800",
    },
  },
  {
    id: "nargis-khatoon",
    name: "Nargis Khatoon",
    role: "Student / Parent",
    initial: "N",
    quote: "This is the most amazing institution I have ever come across.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-nargis-khatoon.png",
    tag: "Overall Experience",
    colorScheme: {
      avatarBg: "bg-educraft-primary text-white",
      borderHover: "hover:border-educraft-primary",
      badgeBg: "bg-educraft-primary/10 text-educraft-primary",
    },
  },
  {
    id: "adarsh-singh",
    name: "Adarsh Singh",
    role: "Student",
    initial: "A",
    quote: "Friendly environment with great faculties.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-adarsh-singh.png",
    tag: "Friendly Environment",
    colorScheme: {
      avatarBg: "bg-[#294263] text-white",
      borderHover: "hover:border-[#294263]",
      badgeBg: "bg-indigo-50 text-indigo-900",
    },
  },
  {
    id: "op-gamer",
    name: "OP Gamer",
    role: "Student",
    initial: "O",
    quote: "Had a great experience out there very good faculty.",
    rating: 5,
    imagePath: "/images/testimonials/testimonial-op-gamer.png",
    tag: "Faculty Review",
    colorScheme: {
      avatarBg: "bg-educraft-gold text-white",
      borderHover: "hover:border-educraft-gold",
      badgeBg: "bg-amber-50 text-amber-900",
    },
  },
];

export const STUDENTS_PARENTS_WALL: StudentParentWallItem[] = [
  { name: "Papon Manna", initial: "P", rating: 5 },
  { name: "Tiyasha Kumari", initial: "T", rating: 5 },
  { name: "Anik Shaw", initial: "A", rating: 5 },
  { name: "Pranav Kumar", initial: "P", rating: 5 },
  { name: "Sagnik Jana", initial: "S", rating: 5 },
  { name: "Aryaman Dagar", initial: "A", rating: 5 },
  { name: "Sagnik", initial: "S", rating: 5 },
  { name: "Nazia", initial: "N", rating: 5 },
  { name: "MD Saif", initial: "M", rating: 5 },
  { name: "Amaan Ahmed", initial: "A", rating: 5 },
];
