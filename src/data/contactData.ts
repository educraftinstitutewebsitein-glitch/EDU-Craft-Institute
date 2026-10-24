export interface ContactFAQ {
  question: string;
  answer: string;
}

export const CONTACT_HERO_DATA = {
  eyebrow: "WE'RE HERE TO HELP",
  mainHeading: "Let's Start a Conversation.",
  supportingCopy:
    "Have a question about our programmes, admissions, or learning options? Reach out to EDU-Craft and let us help you explore the right next step.",
  primaryCTA: "CONTACT OUR TEAM",
  secondaryCTA: "GET DIRECTIONS",
};

export const CONTACT_CARDS_DATA = [
  {
    id: "call-us",
    title: "Call Us",
    detail: "8100650948",
    subtext: "Direct academic enquiries & admissions guidance",
    buttonLabel: "CALL NOW",
    href: "tel:8100650948",
    type: "phone",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    detail: "9477546832",
    subtext: "Instant messaging for parents and students",
    buttonLabel: "CHAT ON WHATSAPP",
    href: `https://wa.me/919477546832?text=${encodeURIComponent(
      "Hello EDU-Craft | Institute, I would like to enquire about your courses and admission process."
    )}`,
    type: "whatsapp",
  },
  {
    id: "email-us",
    title: "Email Us",
    detail: "educraft2k2f.official@gmail.com",
    subtext: "Official institutional communications & records",
    buttonLabel: "SEND AN EMAIL",
    href: "mailto:educraft2k2f.official@gmail.com",
    type: "email",
  },
  {
    id: "visit-us",
    title: "Visit Our Institute",
    detail: "B-71, Garden Reach Road, Kolkata – 700024",
    subtext: "Classroom academic centre in South Kolkata",
    buttonLabel: "GET DIRECTIONS",
    href: "https://share.google/nR7V7tR8cd5XmXPad",
    type: "location",
  },
];

export const QUICK_SHORTCUTS_DATA = [
  {
    title: "Admissions",
    desc: "Explore admission procedures and start an enquiry.",
    href: "/admission",
    enquiryType: "Admission Enquiry",
  },
  {
    title: "Courses",
    desc: "Foundation 5–10, Higher Secondary, and entrance prep.",
    href: "/courses",
    enquiryType: "Course Information",
  },
  {
    title: "Scholarships",
    desc: "ESAT, board marks, sibling and ex-ECI concessions.",
    href: "/courses#fees",
    enquiryType: "Scholarship Information",
  },
  {
    title: "Test Series",
    desc: "Free open practice for NEET & IIT-JEE, and board test series.",
    href: "/test-series",
    enquiryType: "Test Series",
  },
  {
    title: "Fees & Study Material",
    desc: "Transparent fees and flexible payment arrangement details.",
    href: "/courses",
    enquiryType: "Fees and Payment Information",
  },
];

export const CONTACT_PROCESS_STEPS = [
  {
    number: "01",
    title: "Reach Out",
    description: "Choose the contact method that works best for you.",
    tag: "Initiation",
  },
  {
    number: "02",
    title: "Tell Us Your Question",
    description: "Share your academic goals or the information you need.",
    tag: "Discussion",
  },
  {
    number: "03",
    title: "Discuss Your Options",
    description: "Connect with the institute to understand the relevant programmes and next steps.",
    tag: "Clarity & Direction",
  },
];

export const CONTACT_FAQS: ContactFAQ[] = [
  {
    question: "How can I enquire about admissions?",
    answer: "Use the contact form, call the institute, or contact us on WhatsApp.",
  },
  {
    question: "Which programmes are available?",
    answer:
      "EDU-Craft offers Foundation programmes for Classes 5–10, Higher Secondary programmes for Classes 11–12, and IIT-JEE and NEET preparation. Availability and programme details should be confirmed with the institute.",
  },
  {
    question: "How can I ask about course fees?",
    answer:
      "Choose “Fees and Payment Information” in the contact form or contact the institute directly.",
  },
  {
    question: "Can I ask about scholarships?",
    answer:
      "Yes. Select “Scholarship Information” in the enquiry form to discuss applicable eligibility and conditions.",
  },
  {
    question: "Where is EDU-Craft located?",
    answer:
      "B-71, Garden Reach Road, Kolkata – 700024. Use the Google Maps link for directions.",
  },
  {
    question: "Can I contact the institute through WhatsApp?",
    answer: "Yes. Use the WhatsApp contact button to start a conversation.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/edu_craft2k2f?stkn=bnhvMTV6N2FkOWJ0",
    handle: "@edu_craft2k2f",
    color: "hover:text-[#E1306C]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1C4gnNaP7d/",
    handle: "EDU-Craft Facebook",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@edu-craftinstitute?si=fM3vPfqHjL2pyYI8",
    handle: "@edu-craftinstitute",
    color: "hover:text-[#FF0000]",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/EDUCraftIns21",
    handle: "@EDUCraftIns21",
    color: "hover:text-black",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@edu_craft2k2f",
    handle: "@edu_craft2k2f",
    color: "hover:text-black",
  },
];

export const LOCATION_DETAILS = {
  institute: "EDU-Craft | Institute",
  addressLine1: "B-71, Garden Reach Road",
  cityPincode: "Kolkata – 700024",
  fullAddress: "B-71, Garden Reach Road, Kolkata – 700024",
  googleMapsUrl: "https://share.google/nR7V7tR8cd5XmXPad",
  phone: "8100650948",
  whatsapp: "9477546832",
};
