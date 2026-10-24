export interface AdmissionProgramme {
  id: string;
  title: string;
  classes: string;
  badge: string;
  description: string;
  options: string[];
  ctaLabel: string;
  programmeValue: string;
}

export interface AdmissionStep {
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface AdmissionFAQ {
  question: string;
  answer: string;
}

export const ADMISSION_HERO_DATA = {
  eyebrow: "ADMISSIONS OPEN — ENQUIRE TODAY",
  mainHeading: "Your Next Chapter Starts Here.",
  supportingText:
    "Every student's journey is different. Tell us about your academic goals, explore the right programme, and let our team help you understand the next steps.",
  primaryCTA: "START AN ENQUIRY",
  secondaryCTA: "EXPLORE COURSES",
};

export const ADMISSION_PHILOSOPHY = {
  headline: "Enrollment is a Conversation, Not a Form.",
  copy:
    "We believe that the right academic environment begins with understanding the student. Our admission enquiry process is designed to help families discuss their goals, clarify programme options, and make an informed decision.",
  principles: [
    {
      title: "Understand the Student",
      desc: "Learn about the student's class, academic needs, and goals.",
      tag: "Academic Assessment",
    },
    {
      title: "Explore the Right Programme",
      desc: "Discuss suitable academic or competitive preparation options.",
      tag: "Curriculum Choice",
    },
    {
      title: "Make an Informed Decision",
      desc: "Understand the programme structure, fees, and next steps before proceeding.",
      tag: "Transparent Guidance",
    },
  ],
  disclaimer: "Submitting an admission enquiry initiates an academic discussion and does not guarantee admission.",
};

export const ADMISSION_PROGRAMMES: AdmissionProgramme[] = [
  {
    id: "foundation",
    title: "Foundation Programme",
    classes: "Classes 5–10",
    badge: "School Level",
    description: "Structured academic support across major school subjects. Subject availability depends on the student's class and programme.",
    options: ["Classes 5–10", "Offline and online learning options", "Boards: WBBSE, ICSE, and CBSE"],
    ctaLabel: "ENQUIRE FOR FOUNDATION",
    programmeValue: "Foundation Programme",
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary Programme",
    classes: "Classes 11–12",
    badge: "Board Level",
    description: "Comprehensive stream-calibrated preparation for higher secondary board examinations.",
    options: ["Science: PCMB", "Arts: Subjects per selected programme", "Commerce: Subjects per selected programme"],
    ctaLabel: "ENQUIRE FOR CLASS 11–12",
    programmeValue: "Higher Secondary Programme",
  },
  {
    id: "competitive",
    title: "Competitive Preparation",
    classes: "IIT-JEE & NEET",
    badge: "Entrance Coaching",
    description: "Suitable preparation options according to the student's level and target competitive examination.",
    options: ["IIT-JEE Engineering Entrance", "NEET Medical Entrance", "Free Test Practice on Registration"],
    ctaLabel: "ENQUIRE FOR COMPETITIVE COURSES",
    programmeValue: "IIT-JEE Preparation",
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    number: "01",
    title: "Submit an Enquiry",
    description: "Share the student's basic details and academic interests through our simple enquiry form.",
    tag: "Initial Contact",
  },
  {
    number: "02",
    title: "Connect with Our Team",
    description: "Our academic team can discuss the student's requirements and relevant programme options.",
    tag: "Academic Discussion",
  },
  {
    number: "03",
    title: "Understand the Programme",
    description: "Clarify subjects, teaching format, fees, study material, and other applicable details.",
    tag: "Course Clarity",
  },
  {
    number: "04",
    title: "Discuss Enrolment",
    description: "Proceed with the next steps after confirming programme suitability and applicable terms with the institute.",
    tag: "Formal Enrolment",
  },
];

export const SCHOLARSHIP_DETAILS = {
  headline: "Scholarship & Merit Opportunities",
  subheading: "Rewarding academic diligence and dedicated effort",
  mainInfo: "Scholarships may range from 10% to 90%, subject to eligibility and applicable conditions.",
  criteria: "Eligibility may be based on ESAT (EDU-Craft Scholarship Admission Test) or high board marks, with 90%+ in CBSE/ICSE given as an example.",
  additional: [
    { label: "Sibling Scholarship", value: "10%" },
    { label: "Ex-ECI Student Scholarship", value: "5%" },
  ],
  rules: [
    "Only one scholarship applies per student.",
    "Scholarships are not cumulative and cannot be combined.",
    "All scholarship eligibility is subject to institute confirmation and applicable terms.",
  ],
};

export const FEES_TRANSPARENCY_INFO = {
  title: "Clear Information. Confident Decisions.",
  description:
    "We maintain transparent academic operations so that families can plan with total peace of mind.",
  points: [
    "Programme fees and applicable taxes (18% GST extra).",
    "Study material inclusion according to selected study arrangement.",
    "Available payment arrangements (monthly, lump-sum, or PDC installments).",
    "Scholarship eligibility through ESAT and board performance.",
    "Relevant programme structure and class requirements.",
  ],
};

export const CONTACT_BUSINESS_INFO = {
  instituteName: "EDU-Craft | Institute",
  address: "B-71, Garden Reach Road, Kolkata – 700024",
  phone: "8100650948",
  phoneUrl: "tel:+918100650948",
  whatsapp: "9477546832",
  whatsappUrl:
    "https://wa.me/919477546832?text=Hello%20EDU-Craft%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20admission%20programmes.",
  email: "educraft2k2f.official@gmail.com",
  emailUrl: "mailto:educraft2k2f.official@gmail.com",
  googleMapsUrl: "https://share.google/nR7V7tR8cd5XmXPad",
  academicSession: "2026–2027",
};

export const ADMISSION_FAQS: AdmissionFAQ[] = [
  {
    question: "Which classes does EDU-Craft offer programmes for?",
    answer:
      "EDU-Craft offers structured academic programmes for Foundation (Classes 5–10), Higher Secondary (Classes 11–12 across Science, Arts, and Commerce), and Competitive preparation for IIT-JEE and NEET (including Droppers).",
  },
  {
    question: "Which school boards are supported?",
    answer:
      "For Foundation classes (5–10), programmes support students following WBBSE, ICSE, and CBSE curricula.",
  },
  {
    question: "Are online and offline learning options available?",
    answer:
      "Yes. Classroom-based offline learning is conducted at our Garden Reach, Kolkata centre, and online academic learning options are available for students requiring remote study.",
  },
  {
    question: "How can I enquire about IIT-JEE or NEET preparation?",
    answer:
      "You can select 'IIT-JEE Preparation' or 'NEET Preparation' directly in the admission enquiry form, or reach out to our team via WhatsApp (9477546832) or Phone (8100650948). Test series practice for IIT-JEE and NEET is free on registration.",
  },
  {
    question: "Can I ask about scholarship eligibility?",
    answer:
      "Yes. Scholarships from 10% to 90% may be available based on ESAT performance or high board marks (e.g. 90%+ in CBSE/ICSE). Sibling (10%) and Ex-ECI student (5%) concessions are also available. Please enquire for applicable terms.",
  },
  {
    question: "How do I learn about programme fees and study material?",
    answer:
      "Detailed fee ranges for Foundation, Higher Secondary, and Competitive programmes are listed on our Courses page. Study material inclusion depends on your selected programme option and can be confirmed with our academic counsellors.",
  },
  {
    question: "Does submitting an enquiry guarantee admission?",
    answer:
      "No. Submitting an admission enquiry is the first step in starting a conversation with our team to explore suitable academic options, assess individual learning needs, and clarify terms. It does not guarantee admission.",
  },
];
