export type FacultyCategory =
  | "All Faculty"
  | "Foundation"
  | "Science"
  | "Mathematics"
  | "Social Science"
  | "Languages"
  | "Competitive";

export interface FacultyMember {
  id: string;
  number: string;
  name: string;
  qualification: string;
  experience: string;
  role?: "Founder";
  isFounder?: boolean;
  subjectsAndClasses: {
    label: string;
    items: string[];
  }[];
  allSubjects: string[];
  classesSummary: string;
  competitiveExams?: string[];
  imagePath: string;
  founderImagePath?: string;
  initials: string;
  categories: FacultyCategory[];
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "md-shaharyar-alam",
    number: "01",
    name: "MD Shaharyar Alam",
    qualification: "B.Sc. Zoology Honours",
    experience: "7+ years",
    role: "Founder",
    isFounder: true,
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["All subjects"],
      },
      {
        label: "Classes 11–12 and NEET",
        items: ["Zoology", "Botany"],
      },
      {
        label: "Classes 11–12",
        items: ["English"],
      },
    ],
    allSubjects: ["All subjects (Foundation)", "Zoology", "Botany", "English"],
    classesSummary: "Classes 5–10, Classes 11–12, NEET",
    competitiveExams: ["NEET"],
    imagePath: "/images/faculty/md-shaharyar-alam-faculty.jpg",
    founderImagePath: "/images/faculty/md-shaharyar-alam.jpg",
    initials: "SA",
    categories: ["All Faculty", "Foundation", "Science", "Languages", "Competitive"],
  },
  {
    id: "umair-khan",
    number: "02",
    name: "Umair Khan",
    qualification: "B.Sc. Physics Honours",
    experience: "5+ years",
    role: "Founder",
    isFounder: true,
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["All subjects"],
      },
      {
        label: "Classes 11–12, NEET, and IIT-JEE",
        items: ["Physics"],
      },
    ],
    allSubjects: ["All subjects (Foundation)", "Physics"],
    classesSummary: "Classes 5–10, Classes 11–12, NEET, IIT-JEE",
    competitiveExams: ["NEET", "IIT-JEE"],
    imagePath: "/images/faculty/umair-khan.jpg",
    initials: "UK",
    categories: ["All Faculty", "Foundation", "Science", "Competitive"],
  },
  {
    id: "dania-khushnoor",
    number: "03",
    name: "Dania Khushnoor",
    qualification: "B.Sc. Chemistry Honours",
    experience: "2+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Mathematics", "Science", "Chemistry"],
      },
      {
        label: "Classes 11–12, NEET, and IIT-JEE",
        items: ["Chemistry"],
      },
    ],
    allSubjects: ["Mathematics", "Science", "Chemistry"],
    classesSummary: "Classes 5–10, Classes 11–12, NEET, IIT-JEE",
    competitiveExams: ["NEET", "IIT-JEE"],
    imagePath: "/images/faculty/dania-khushnoor.jpg",
    initials: "DK",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics", "Competitive"],
  },
  {
    id: "dev-basutti",
    number: "04",
    name: "Dev Basutti",
    qualification: "B.Tech IT Engineering",
    experience: "2+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Mathematics", "Physics", "Chemistry"],
      },
      {
        label: "Classes 11–12 and IIT-JEE",
        items: ["Mathematics"],
      },
    ],
    allSubjects: ["Mathematics", "Physics", "Chemistry"],
    classesSummary: "Classes 5–10, Classes 11–12, IIT-JEE",
    competitiveExams: ["IIT-JEE"],
    imagePath: "/images/faculty/dev-basutti.jpg",
    initials: "DB",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics", "Competitive"],
  },
  {
    id: "shivam-kr-mishra",
    number: "05",
    name: "Shivam Kr. Mishra",
    qualification: "B.Sc. General",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["History", "Geography", "Economics", "Civics"],
      },
    ],
    allSubjects: ["History", "Geography", "Economics", "Civics"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/shivam-kr-mishra.jpg",
    initials: "SM",
    categories: ["All Faculty", "Foundation", "Social Science"],
  },
  {
    id: "trisha-barik",
    number: "06",
    name: "Trisha Barik",
    qualification: "B.Com Honours",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Bengali", "Computers"],
      },
    ],
    allSubjects: ["Bengali", "Computers"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/trisha-barik.jpg",
    initials: "TB",
    categories: ["All Faculty", "Foundation", "Languages"],
  },
  {
    id: "atreo-sardar",
    number: "07",
    name: "Atreo Sardar",
    qualification: "B.Sc. Zoology Honours",
    experience: "2+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Biology", "History", "Civics", "Geography", "English", "EVS"],
      },
    ],
    allSubjects: ["Biology", "History", "Civics", "Geography", "English", "EVS"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/atreo-sardar-v2.jpg",
    initials: "AS",
    categories: ["All Faculty", "Foundation", "Science", "Social Science", "Languages"],
  },
  {
    id: "zaid-ali",
    number: "08",
    name: "Zaid Ali",
    qualification: "B.Sc. Zoology Honours",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["All subjects"],
      },
    ],
    allSubjects: ["All subjects"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/zaid-ali.jpg",
    initials: "ZA",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics", "Social Science", "Languages"],
  },
  {
    id: "jalil-ur-rahman",
    number: "09",
    name: "Jalil-Ur-Rahman",
    qualification: "B.Sc. Zoology Honours",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["All subjects"],
      },
    ],
    allSubjects: ["All subjects"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/jalil-ur-rahman.jpg",
    initials: "JR",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics", "Social Science", "Languages"],
  },
  {
    id: "biswajit-kr-singh",
    number: "10",
    name: "Biswajit Kr. Singh",
    qualification: "B.Tech Mechanical Engineer",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Mathematics", "Physics"],
      },
    ],
    allSubjects: ["Mathematics", "Physics"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/biswajit-kr-singh.jpg",
    initials: "BS",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics"],
  },
  {
    id: "md-maaz-alam",
    number: "11",
    name: "MD Maaz Alam",
    qualification: "B.Sc. General",
    experience: "5+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Physics", "Chemistry", "Mathematics"],
      },
    ],
    allSubjects: ["Physics", "Chemistry", "Mathematics"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/md-maaz-alam.jpg",
    initials: "MA",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics"],
  },
  {
    id: "md-arbaz-ahmed",
    number: "12",
    name: "MD Arbaz Ahmed",
    qualification: "B.Tech IT Engineering",
    experience: "4+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Mathematics", "Physics", "Chemistry", "Biology"],
      },
    ],
    allSubjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    classesSummary: "Foundation Classes 5–10",
    imagePath: "/images/faculty/md-arbaz-ahmed.jpg",
    initials: "AA",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics"],
  },
  {
    id: "sadiqua-khanam",
    number: "13",
    name: "Sadiqua Khanam",
    qualification: "B.Sc. Physics Honours",
    experience: "3+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["Mathematics", "Physics", "Chemistry", "Biology"],
      },
      {
        label: "Classes 11–12",
        items: ["Physics", "Chemistry"],
      },
    ],
    allSubjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
    classesSummary: "Foundation Classes 5–10, Classes 11–12",
    imagePath: "/images/faculty/sadiqua-khanam.jpg",
    initials: "SK",
    categories: ["All Faculty", "Foundation", "Science", "Mathematics"],
  },
  {
    id: "megha-sinha",
    number: "14",
    name: "Megha Sinha",
    qualification: "B.Sc. Zoology Honours",
    experience: "2+ years",
    subjectsAndClasses: [
      {
        label: "Foundation Classes 5–10",
        items: ["English", "Bengali", "Biology", "SST"],
      },
      {
        label: "Classes 11–12",
        items: ["English", "Biology"],
      },
    ],
    allSubjects: ["English", "Bengali", "Biology", "SST"],
    classesSummary: "Foundation Classes 5–10, Classes 11–12",
    imagePath: "/images/faculty/megha-sinha.jpg",
    initials: "MS",
    categories: ["All Faculty", "Foundation", "Science", "Social Science", "Languages"],
  },
];

export const FACULTY_CATEGORIES: FacultyCategory[] = [
  "All Faculty",
  "Foundation",
  "Science",
  "Mathematics",
  "Social Science",
  "Languages",
  "Competitive",
];
