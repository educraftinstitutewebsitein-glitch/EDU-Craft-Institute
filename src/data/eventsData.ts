export interface EventWinner {
  position: "1st" | "2nd" | "3rd";
  name: string;
  badgeColor: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  session: string;
  date: string;
  venue: string;
  organizer: string;
  status: "Completed" | "Upcoming";
  category: "Mathematics" | "Science" | "Academic Competition";
  description: string;
  highlights: string[];
  bannerImage: string;
  gallery: {
    src: string;
    caption: string;
    tag: string;
  }[];
  winnersByGroup?: {
    group: string;
    classes: string;
    winners: EventWinner[];
    posterImage?: string;
  }[];
  specialNote?: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "master-mathematics-challenge-2026",
    title: "Master Mathematics Challenge 2026",
    subtitle: "Empowering Future Leaders through Conceptual & Analytical Mastery",
    session: "Session - 1",
    date: "July 2026",
    venue: "Shamseen Zenana Madrasa, Garden Reach, Kolkata – 700024",
    organizer: "EDU-Craft | Institute (Estd. 2021)",
    status: "Completed",
    category: "Mathematics",
    description:
      "The Master Mathematics Challenge 2026 is EDU-Craft Institute's flagship academic competition designed to foster critical problem-solving, mathematical intuition, and competitive confidence across school students from Class 3 to Class 10. Divided into three targeted groups, students competed in rigorous, non-rote problem rounds that celebrated analytical thinking.",
    highlights: [
      "Over 60+ enthusiastic participants across three targeted age groups",
      "Special free mathematics orientation & guidance sessions for students",
      "Prestigious trophies, medals, and certificates awarded to top achievers",
      "Distinguished faculty, founders & guest mentors in attendance",
    ],
    bannerImage: "/images/events/mmc-2026-hall.jpg",
    gallery: [
      {
        src: "/images/events/mmc-2026-hall.jpg",
        caption: "Master Mathematics Challenge 2026 participants, faculty & organizers assembled at the grand hall.",
        tag: "Grand Assembly",
      },
      {
        src: "/images/events/mmc-2026-dignitaries.png",
        caption: "Distinguished guest dignitaries, senior faculty, and community mentors seated at the dais with official trophies.",
        tag: "Guest Dignitaries",
      },
      {
        src: "/images/events/mmc-2026-organizing-panel.jpg",
        caption: "Core organizing panel and educator leadership seated with the official Master Mathematics Challenge trophies.",
        tag: "Leadership Panel",
      },
      {
        src: "/images/events/mmc-2026-organizers.jpg",
        caption: "Faculty members, student coordinators, and volunteer organizers on stage.",
        tag: "Organizing Team",
      },
      {
        src: "/images/events/mmc-2026-trophy-ceremony-1.png",
        caption: "Prize distribution ceremony — student finalist receiving trophy and medal from faculty leadership.",
        tag: "Prize Distribution",
      },
      {
        src: "/images/events/mmc-2026-trophy-abdullah.png",
        caption: "Group C 2nd Rank Winner Abdullah receiving his Master Mathematics Challenge 2026 trophy and medal from faculty mentor.",
        tag: "Winner Felicitation",
      },
      {
        src: "/images/events/mmc-2026-trophy-ceremony-2.png",
        caption: "Young student achiever being felicitated with a championship trophy on stage.",
        tag: "Student Felicitation",
      },
      {
        src: "/images/events/mmc-2026-medal-felicitation.png",
        caption: "Distinguished mentors presenting the official competition medal to student achiever.",
        tag: "Medal Ceremony",
      },
      {
        src: "/images/events/mmc-2026-winners-group-a.jpg",
        caption: "Official Group A (Classes 3 to 5) award ceremony celebrating 1st, 2nd, and 3rd rank holders.",
        tag: "Group A Ceremony",
      },
      {
        src: "/images/events/mmc-2026-winners-group-b.jpg",
        caption: "Official Group B (Classes 6 to 8) winners — Md Ashraf Jamal Qureshi (1st), Shadman Akhtar (2nd) & Asifa Kaushar (3rd) felicitated on stage.",
        tag: "Group B Ceremony",
      },
      {
        src: "/images/events/mmc-2026-winners-group-c.jpg",
        caption: "Official Group C (Classes 9 to 10) award felicitation acknowledging exceptional senior talent.",
        tag: "Group C Ceremony",
      },
      {
        src: "/images/events/mmc-2026-faculty-outdoor.jpg",
        caption: "EDU-Craft faculty members, organizers, and academic mentors outdoors by the venue grounds.",
        tag: "Faculty Team",
      },
    ],
    winnersByGroup: [
      {
        group: "Group A",
        classes: "Class 3 to 5",
        posterImage: "/images/events/mmc-2026-winners-group-a.jpg",
        winners: [
          { position: "1st", name: "Ayesha Khan", badgeColor: "bg-amber-400 text-amber-950" },
          { position: "2nd", name: "Shayan Qamar", badgeColor: "bg-slate-300 text-slate-900" },
          { position: "3rd", name: "Aqdass Muneer", badgeColor: "bg-amber-700 text-amber-50" },
        ],
      },
      {
        group: "Group B",
        classes: "Class 6 to 8",
        posterImage: "/images/events/mmc-2026-winners-group-b.jpg",
        winners: [
          { position: "1st", name: "Md Ashraf Jamal Qureshi", badgeColor: "bg-amber-400 text-amber-950" },
          { position: "2nd", name: "Shadman Akhtar", badgeColor: "bg-slate-300 text-slate-900" },
          { position: "3rd", name: "Asifa Kaushar", badgeColor: "bg-amber-700 text-amber-50" },
        ],
      },
      {
        group: "Group C",
        classes: "Class 9 to 10",
        posterImage: "/images/events/mmc-2026-winners-group-c.jpg",
        winners: [
          { position: "1st", name: "Parwez", badgeColor: "bg-amber-400 text-amber-950" },
          { position: "2nd", name: "Abdullah", badgeColor: "bg-slate-300 text-slate-900" },
          { position: "3rd", name: "Yaseen", badgeColor: "bg-amber-700 text-amber-50" },
        ],
      },
    ],
    specialNote:
      "\"Free Mathematics Classes For All Students\" was inaugurated as part of the challenge to ensure continued academic mentorship following the competition.",
  },
];
