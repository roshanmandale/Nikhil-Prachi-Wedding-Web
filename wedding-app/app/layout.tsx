import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Cinzel, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil & Prachi — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the union of Nikhil Sharma & Prachi Verma on June 8th, 2026. Join us for a grand celebration of love, joy, and timeless memories.",
  keywords: ["wedding", "wedding invitation", "Nikhil", "Prachi", "Indian wedding"],
  openGraph: {
    title: "Nikhil & Prachi — Wedding Invitation",
    description: "You are cordially invited to the wedding of Nikhil & Prachi on June 8th, 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
