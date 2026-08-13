import type { Metadata } from "next";
import {
  Great_Vibes,
  Playfair_Display,
  Cinzel,
  Cinzel_Decorative,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel-decorative",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Akanksha & Tathagat — Wedding Invitation",
  description: "You are cordially invited to celebrate the wedding of Akanksha & Tathagat",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfair.variable} ${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
