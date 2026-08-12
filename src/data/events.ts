export interface WeddingEvent {
  id: string;
  name: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapLink: string;
  icon: string;
  image?: string;
}

export const events: WeddingEvent[] = [
  {
    id: "haldi",
    name: "Haldi",
    tagline: "Blessings in Gold",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    mapLink: "#",
    icon: "haldi",
  },
  {
    id: "mehendi",
    name: "Mehendi",
    tagline: "Colors of Love",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    mapLink: "#",
    icon: "mehendi",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    tagline: "Dance, Dazzle, Celebrate",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    mapLink: "#",
    icon: "sangeet",
    image: "/images/couple-sangeet.jpg",
  },
  {
    id: "wedding",
    name: "Wedding",
    tagline: "Two Souls, One Journey",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    mapLink: "#",
    icon: "wedding",
    image: "/images/couple-dance.jpg",
  },
  {
    id: "reception",
    name: "Reception",
    tagline: "A Night of Celebration",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    mapLink: "#",
    icon: "reception",
  },
];

export const weddingDetails = {
  bride: "Akanksha",
  groom: "Tathagat",

  // Structured wedding date (drives the hero invitation card).
  // Set dateKnown to true once the real date is confirmed.
  dateKnown: false,
  weddingMonth: "Month", // e.g. "December"
  weddingDay: "00", // e.g. "14"
  weddingYear: "2026",
  weddingWeekday: "Weekday", // e.g. "Sunday"
  weddingTime: "Time to be announced", // e.g. "At Seven O'Clock in the Evening"

  // Primary ceremony venue shown on the hero card
  ceremonyVenue: "Venue to be announced",
  ceremonyCity: "",

  brideParents: {
    father: "Father's Name",
    mother: "Mother's Name",
  },
  groomParents: {
    father: "Father's Name",
    mother: "Mother's Name",
  },
};
