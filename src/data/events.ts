export interface WeddingEvent {
  id: string;
  name: string;
  subtitle?: string;
  tagline: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  icon: string;
  image?: string;
}

export const events: WeddingEvent[] = [
  {
    id: "carnival",
    name: "Carnival",
    subtitle: "Haldi / Mehendi",
    tagline: "Colours, Laughter & Blessings",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
    icon: "carnival",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    tagline: "Dance, Dazzle, Celebrate",
    date: "Date TBD",
    time: "Time TBD",
    venue: "Venue TBD",
    address: "Address TBD",
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
    icon: "reception",
  },
];

export const weddingDetails = {
  bride: "Akanksha",
  groom: "Tathagat",

  dateKnown: false,
  weddingMonth: "Month",
  weddingDay: "00",
  weddingYear: "2026",
  weddingWeekday: "Weekday",
  weddingTime: "Time to be announced",

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
