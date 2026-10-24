export interface ProgrammeComparison {
  programme: string;
  classes: string;
  mode: string;
  fee: string;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const FOUNDATION_DATA = {
  title: "FOUNDATION",
  classes: "Classes 5–10",
  modes: ["Offline Foundation (Classroom-based academic learning)", "Online Foundation (Online academic learning)"],
  boards: ["WBBSE", "ICSE", "CBSE"],
  description:
    "The Foundation Programme provides structured academic support for students in Classes 5–10 across major school subjects. The programme focuses on conceptual clarity, regular practice, academic guidance, and preparation according to the student's class and school curriculum. Subject availability may vary according to class, board, and academic programme. For Classes 9–10, subject arrangements may follow the student's school curriculum and applicable academic stream.",
  subjects: [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Hindi",
    "Bengali",
    "History",
    "Geography",
    "Civics",
    "Economics",
    "M. Science",
    "General Knowledge",
    "Value Education",
    "Computer Science",
  ],
  fees: [
    {
      group: "Classes 5–8",
      mode: "Offline",
      feeRange: "₹36,000–₹45,000",
      note: "GST: 18% extra",
    },
    {
      group: "Classes 9–10",
      mode: "Offline",
      feeRange: "₹48,000–₹60,000",
      note: "GST: 18% extra",
    },
  ],
  feeNote: "The supplied fee ranges are for offline Foundation programmes. (18% GST extra).",
};

export const HIGHER_SECONDARY_DATA = {
  title: "HIGHER SECONDARY",
  classes: "Classes 11–12",
  description:
    "The Higher Secondary Programme provides academic support for students studying in Classes 11–12, with subject options according to the selected programme.",
  streams: [
    {
      name: "SCIENCE",
      combination: "PCMB Combination",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      badge: "Core Science Stream",
      note: "Rigorous focus on conceptual mastery, numerical problem solving, and board excellence.",
    },
    {
      name: "ARTS",
      combination: "Humanities Stream",
      subjects: ["Subjects available according to selected programme"],
      badge: "Humanities",
      note: "Subject options available according to the selected academic programme.",
    },
    {
      name: "COMMERCE",
      combination: "Commerce Stream",
      subjects: ["Subjects available according to selected programme"],
      badge: "Business Studies & Commerce",
      note: "Subject options available according to the selected academic programme.",
    },
  ],
  fees: [
    {
      group: "Class 11",
      mode: "Offline",
      feeRange: "₹60,000–₹80,000",
      note: "Depends on study-material option. GST: 18% extra.",
    },
    {
      group: "Class 12",
      mode: "Offline",
      feeRange: "₹68,500–₹84,500",
      note: "Depends on study-material option. GST: 18% extra.",
    },
  ],
};

export const COMPETITIVE_DATA = [
  {
    id: "iit-jee",
    title: "IIT-JEE",
    category: "Engineering Entrance",
    target: "For students preparing for the IIT-JEE examination",
    focus: "Focus on subject understanding, practice, and examination preparation.",
    dropperFee: "₹80,000–₹98,900",
    note: "Fee range for Droppers. GST: 18% extra.",
    cta: "ENQUIRE ABOUT IIT-JEE",
    badge: "Engineering Aspirants",
  },
  {
    id: "neet",
    title: "NEET",
    category: "Medical Entrance",
    target: "For students preparing for the NEET examination",
    focus: "Focus on subject understanding, practice, and examination preparation.",
    dropperFee: "₹78,000–₹95,600",
    note: "Fee range for Droppers. GST: 18% extra.",
    cta: "ENQUIRE ABOUT NEET",
    badge: "Medical Aspirants",
  },
];

export const TEST_SERIES_DATA = {
  heading: "TEST SERIES",
  headline: "Test. Analyse. Improve.",
  bannerInfo: "IIT-JEE and NEET Test Practice is free and open to all on registration.",
  subtext: "The institute also provides test-series practice for Foundation, Boards, and competitive examinations.",
  categories: [
    {
      level: "Foundation — Classes 5–8",
      points: [
        "Reduce exam anxiety.",
        "Develop consistent study habits.",
        "Improve writing speed and presentation.",
      ],
      tag: "Habit & Presentation",
    },
    {
      level: "Classes 9–12 (Boards)",
      points: [
        "Familiarity with examination patterns.",
        "Identifying learning gaps.",
        "Answer-writing mechanics.",
      ],
      tag: "Exam Mechanics & Gaps",
    },
    {
      level: "IIT-JEE and NEET",
      points: [
        "Simulated examination conditions.",
        "Negative-marking management.",
        "Speed and accuracy.",
        "Time allocation.",
        "Performance analysis and benchmarking.",
      ],
      tag: "Free on Registration",
      highlight: true,
    },
  ],
  pricing: "Free for the IIT-JEE and NEET test practice described above.",
  eligibility: "Open to all on registration.",
  cta: "REGISTER FREE",
};

export const STUDY_MATERIAL_DATA = {
  heading: "STUDY MATERIAL & DLP",
  description:
    "Study material is often included in classroom fees. Inclusion depends on the selected programme and fee arrangement.",
  dlpRange: "₹2,000–₹23,500",
  dlpNote: "Standalone Test Series or Distance Learning Packages (DLP).",
  cta: "ENQUIRE ABOUT STUDY MATERIAL",
};

export const COMPARISON_TABLE: ProgrammeComparison[] = [
  {
    programme: "Foundation",
    classes: "5–8",
    mode: "Offline",
    fee: "₹36,000–₹45,000",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "Foundation",
    classes: "9–10",
    mode: "Offline",
    fee: "₹48,000–₹60,000",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "Higher Secondary",
    classes: "11",
    mode: "Offline",
    fee: "₹60,000–₹80,000",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "Higher Secondary",
    classes: "12",
    mode: "Offline",
    fee: "₹68,500–₹84,500",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "IIT-JEE Droppers",
    classes: "As applicable",
    mode: "Not specified",
    fee: "₹80,000–₹98,900",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "NEET Droppers",
    classes: "As applicable",
    mode: "Not specified",
    fee: "₹78,000–₹95,600",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "Standalone Test Series or DLP",
    classes: "As applicable",
    mode: "Not specified",
    fee: "₹2,000–₹23,500",
    ctaText: "Enquire",
    ctaLink: "/admission#enquiry",
  },
  {
    programme: "IIT-JEE & NEET Test Practice",
    classes: "As applicable",
    mode: "Not specified",
    fee: "Free on registration",
    ctaText: "Register Free",
    ctaLink: "/admission#enquiry",
    featured: true,
  },
];

export const PAYMENT_TERMS = [
  "Monthly billing, where applicable, is payable within the first week.",
  "A lump-sum payment may offer a minor reduction.",
  "Installment arrangements require PDCs.",
  "Annual pre-payment offers a 5% discount on 12 months paid upfront.",
  "A trial session costs ₹800 and is adjusted against tuition if the student enrols.",
  "One-time registration fee: ₹1,500, payable with the first month's fee.",
];

export const SCHOLARSHIPS_INFO = {
  main: "The EDU-Craft Scholarship Admission Test (ESAT) and high board marks may qualify students for scholarships of 10%–90%. An example of the stated board-mark criterion is 90% or above in CBSE/ICSE.",
  additionalDiscounts: [
    { title: "Sibling Discount", value: "10%" },
    { title: "Ex-ECI Student Discount", value: "5%" },
  ],
  rules: [
    "Maximum one scholarship applies per student.",
    "Do not automatically combine scholarships and discounts.",
    "Please confirm applicable conditions with the institute.",
  ],
};

export const COURSE_FAQS: FAQItem[] = [
  {
    question: "Which classes does EDU-Craft teach?",
    answer:
      "Foundation programmes cover Classes 5–10, and Higher Secondary programmes cover Classes 11–12. Competitive preparation is available for IIT-JEE and NEET.",
  },
  {
    question: "Which boards are supported for Foundation?",
    answer: "WBBSE, ICSE, and CBSE are the listed boards.",
  },
  {
    question: "Are online Foundation classes available?",
    answer: "Both online and offline Foundation options are listed.",
  },
  {
    question: "Which subjects are offered in Foundation?",
    answer:
      "Subject availability depends on class, board, and academic programme. The listed subjects include Mathematics, Physics, Chemistry, Biology, English, Hindi, Bengali, History, Geography, Civics, Economics, M. Science, General Knowledge, Value Education, and Computer Science.",
  },
  {
    question: "Are IIT-JEE and NEET test series free?",
    answer:
      "The stated IIT-JEE and NEET test practice is free and open to all on registration.",
  },
  {
    question: "Is study material included in the fees?",
    answer:
      "Study material is often included in classroom fees, depending on the programme and fee arrangement. Standalone Test Series or DLP packages range from ₹2,000 to ₹23,500.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Scholarships of 10%–90% may be available through ESAT or high board marks. Eligibility and applicable conditions should be confirmed with the institute.",
  },
  {
    question: "Is GST included in the listed programme fees?",
    answer:
      "No. The supplied Foundation, Higher Secondary, and Competitive programme fee ranges are exclusive of 18% GST.",
  },
];

export const CONTACT_INFO = {
  phone: "8100650948",
  phoneUrl: "tel:+918100650948",
  whatsapp: "9477546832",
  whatsappUrl: "https://wa.me/919477546832",
  email: "educraft2k2f.official@gmail.com",
  address: "B-71, Garden Reach Road, Kolkata – 700024",
};
