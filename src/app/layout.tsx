import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Musa Çivioğlu | Professional Translator & English Teacher",
  description:
    "Official portfolio website of Musa Çivioğlu. Professional translation services, English teaching, multilingual communication, and international projects.",

  keywords: [
    "Musa Çivioğlu",
    "Musa Civioglu",
    "Pura Tercüme",
    "translator",
    "english teacher",
    "professional translator",
    "Antalya translator",
    "sworn translation",
    "yeminli tercüme",
    "çevirmen",
    "İngilizce öğretmeni",
  ],

  authors: [{ name: "Musa Çivioğlu" }],

  creator: "Musa Çivioğlu",

  metadataBase: new URL("https://musacivioglu.com"),

  openGraph: {
    title: "Musa Çivioğlu",
    description:
      "Professional Translator & English Teacher Portfolio",
    url: "https://musacivioglu.com",
    siteName: "Musa Çivioğlu",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Musa Çivioğlu",
    description:
      "Professional Translator & English Teacher Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}