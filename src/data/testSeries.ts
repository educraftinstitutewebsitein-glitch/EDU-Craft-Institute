export interface TestCategory {
  id: "foundation" | "classes-9-12" | "iit-jee" | "neet";
  name: string;
  badge: string;
  applicableClasses: string;
  purpose: string;
  description: string;
  focusAreas: string[];
  isFree?: boolean;
  pricingLabel: string;
  ctaText: string;
  ctaLink: string;
}

export interface HowItHelpsStage {
  number: string;
  title: string;
  headline: string;
  description: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const TEST_SERIES_HERO = {
  eyebrow: "EDU-CRAFT TEST SERIES",
  mainHeadline: "TEST. ANALYSE. IMPROVE.",
  supportingHeadline: "Preparation becomes more meaningful when you understand your progress.",
  description:
    "EDU-Craft | Institute offers test practice for Foundation, Board examinations, and competitive examinations. The test-series approach helps students become familiar with examination patterns, practise consistently, identify learning gaps, and improve their preparation.",
  freeNotice: "IIT-JEE and NEET test practice is free and open to all on registration.",
  primaryCTA: {
    label: "REGISTER FREE",
    href: "/admission#enquiry",
  },
  secondaryCTA: {
    label: "EXPLORE TEST SERIES",
    targetId: "categories-section",
  },
};

export const TEST_SERIES_OVERVIEW = {
  heading: "PRACTICE WITH PURPOSE",
  introduction:
    "Tests are an opportunity to practise, understand examination expectations, and identify areas that need further work. The EDU-Craft test-series approach focuses on helping students build consistent habits, become familiar with examination formats, and approach assessments with greater confidence.",
};

export const FOUNDATION_TEST_SERIES = {
  heading: "BUILD STRONG HABITS EARLY",
  applicableClasses: "Classes 5–8",
  description:
    "For students in Classes 5–8, test practice can help establish familiarity with assessments, encourage regular preparation, and build confidence in presenting answers. The focus is on learning and improvement rather than creating unnecessary examination pressure.",
  focusAreas: [
    "Reducing examination anxiety.",
    "Developing consistent study habits.",
    "Improving writing speed.",
    "Improving answer presentation.",
  ],
  tag: "Habits & Presentation",
};

export const HIGHER_CLASSES_TEST_SERIES = {
  heading: "UNDERSTAND THE PATTERN. STRENGTHEN YOUR PREPARATION.",
  applicableClasses: "Classes 9–12",
  description:
    "For students in Classes 9–12, assessment practice focuses on becoming familiar with examination expectations, recognising topics that need more attention, and improving answer-writing technique. Regular practice and review can help students approach their academic preparation more systematically.",
  focusAreas: [
    "Familiarity with examination patterns.",
    "Identifying learning gaps.",
    "Answer-writing mechanics.",
  ],
  tag: "Exam Mechanics & Gaps",
};

export const COMPETITIVE_TEST_SERIES = {
  heading: "PREPARE FOR THE CHALLENGE",
  supportingStatement: "Free and open to all on registration.",
  description:
    "Targeted competitive assessment practice engineered for national examinations. Practice under realistic examination conditions with considered negative-marking management and performance benchmarking.",
  focusAreas: [
    {
      title: "Realistic Examination Practice",
      desc: "Practice under simulated examination conditions.",
    },
    {
      title: "Negative-Marking Management",
      desc: "Understand the importance of making considered decisions in examinations that use negative marking.",
    },
    {
      title: "Speed and Accuracy",
      desc: "Develop a more balanced approach to answering questions efficiently.",
    },
    {
      title: "Time Allocation",
      desc: "Practise managing available examination time.",
    },
    {
      title: "Performance Analysis",
      desc: "Use assessment feedback and available performance information to identify areas requiring attention.",
    },
    {
      title: "Benchmarking",
      desc: "Where comparative data is available, use it to understand performance in context.",
    },
  ],
};

export const HOW_TEST_PRACTICE_HELPS_STAGES: HowItHelpsStage[] = [
  {
    number: "01",
    title: "Prepare",
    headline: "Conceptual Foundation",
    description: "Review the relevant concepts and prepare for the assessment.",
    tag: "Concept Review",
  },
  {
    number: "02",
    title: "Practise",
    headline: "Simulated Assessment",
    description: "Attempt the available test under its stated conditions.",
    tag: "Real Conditions",
  },
  {
    number: "03",
    title: "Review",
    headline: "Diagnostic Feedback",
    description: "Review answers and identify topics that need additional attention, wherever review information is available.",
    tag: "Gap Analysis",
  },
  {
    number: "04",
    title: "Improve",
    headline: "Targeted Remediation",
    description: "Use identified gaps to guide further study, revision, and practice.",
    tag: "Focused Revision",
  },
  {
    number: "05",
    title: "Repeat",
    headline: "Cumulative Mastery",
    description: "Continue practising consistently and work towards stronger understanding and preparation.",
    tag: "Long-Term Retention",
  },
];

export const TEST_CATEGORIES_DATA: TestCategory[] = [
  {
    id: "foundation",
    name: "Foundation",
    badge: "Classes 5–8",
    applicableClasses: "Students in Classes 5–8",
    purpose: "Establish familiarity with assessments and build foundational self-confidence early.",
    description:
      "For students in Classes 5–8, test practice can help establish familiarity with assessments, encourage regular preparation, and build confidence in presenting answers. Focuses on learning rather than exam anxiety.",
    focusAreas: [
      "Reducing examination anxiety.",
      "Developing consistent study habits.",
      "Improving writing speed.",
      "Improving answer presentation.",
    ],
    pricingLabel: "Integrated with Foundation Programme",
    ctaText: "ENQUIRE ABOUT FOUNDATION TESTS",
    ctaLink: "/admission#enquiry",
  },
  {
    id: "classes-9-12",
    name: "Classes 9–12",
    badge: "Board Level",
    applicableClasses: "Students in Classes 9, 10, 11 & 12",
    purpose: "Systematic board examination pattern mastery and answer presentation mechanics.",
    description:
      "Assessment practice focused on understanding board expectations, identifying weak concept topics, and refining structured answer-writing techniques under timed conditions.",
    focusAreas: [
      "Familiarity with examination patterns.",
      "Identifying learning gaps.",
      "Answer-writing mechanics.",
    ],
    pricingLabel: "Integrated with Board Programmes",
    ctaText: "ENQUIRE ABOUT BOARD TESTS",
    ctaLink: "/admission#enquiry",
  },
  {
    id: "iit-jee",
    name: "IIT-JEE",
    badge: "Engineering Entrance",
    applicableClasses: "Engineering Aspirants (Classes 11–12 & Droppers)",
    purpose: "Simulated examination conditions, negative-marking discipline, and speed benchmarking.",
    description:
      "Rigorous test practice for IIT-JEE aspirants to navigate competitive difficulty, balance accuracy against speed, and build endurance under negative marking rules.",
    focusAreas: [
      "Simulated examination conditions.",
      "Negative-marking management.",
      "Speed and accuracy balance.",
      "Strategic time allocation.",
      "Performance feedback analysis.",
    ],
    isFree: true,
    pricingLabel: "FREE ON REGISTRATION",
    ctaText: "REGISTER FREE FOR IIT-JEE",
    ctaLink: "/admission#enquiry",
  },
  {
    id: "neet",
    name: "NEET",
    badge: "Medical Entrance",
    applicableClasses: "Medical Aspirants (Classes 11–12 & Droppers)",
    purpose: "High-accuracy retention, negative-marking management, and time benchmarking.",
    description:
      "Comprehensive medical entrance test simulations designed to sharpen recall speed, reduce calculation mistakes, and enhance exam temperament across Physics, Chemistry, Zoology, and Botany.",
    focusAreas: [
      "Simulated examination conditions.",
      "Negative-marking management.",
      "Speed and accuracy under pressure.",
      "Time management across all sections.",
      "Performance analysis & benchmarking.",
    ],
    isFree: true,
    pricingLabel: "FREE ON REGISTRATION",
    ctaText: "REGISTER FREE FOR NEET",
    ctaLink: "/admission#enquiry",
  },
];

export const TEST_SERIES_FAQS: FAQItem[] = [
  {
    question: "Is IIT-JEE and NEET test practice free?",
    answer: "The stated IIT-JEE and NEET test practice is free and open to all on registration.",
  },
  {
    question: "Who can participate in the test series?",
    answer:
      "The institute describes test practice for Foundation, Boards, and competitive examinations. The specific test options depend on the relevant programme.",
  },
  {
    question: "What is the purpose of Foundation test practice?",
    answer:
      "For Classes 5–8, the focus includes reducing examination anxiety, developing consistent study habits, and improving writing speed and presentation.",
  },
  {
    question: "What does test practice focus on for Classes 9–12?",
    answer:
      "The focus includes examination-pattern familiarity, identifying learning gaps, and improving answer-writing mechanics.",
  },
  {
    question: "What does IIT-JEE and NEET test practice focus on?",
    answer:
      "The stated focus areas include simulated examination conditions, negative-marking management, speed, accuracy, time allocation, performance analysis, and benchmarking.",
  },
  {
    question: "Are test dates and schedules available?",
    answer:
      "Contact EDU-Craft | Institute for the current schedule and availability. Do not invent a timetable.",
  },
  {
    question: "How do I register?",
    answer:
      "Use the available registration option or contact the institute to enquire about registration.",
  },
];

export const CONTACT_DETAILS = {
  phone: "8100650948",
  phoneUrl: "tel:+918100650948",
  whatsapp: "9477546832",
  whatsappUrl: "https://wa.me/919477546832",
  email: "educraft2k2f.official@gmail.com",
  address: "B-71, Garden Reach Road, Kolkata – 700024",
};
