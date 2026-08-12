import type { Metadata } from "next";
import {
  Playfair_Display,
  Great_Vibes,
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akanksha & Tathagat — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Akanksha & Tathagat.",
  openGraph: {
    title: "Akanksha & Tathagat — Wedding Invitation",
    description: "Join us as we celebrate the union of Akanksha & Tathagat.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
