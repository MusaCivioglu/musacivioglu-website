import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://musacivioglu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Musa Çivioğlu | Professional Translator & English Teacher",
  description:
    "Professional translator, English teacher, founder of Pura Tercüme, and multilingual language professional.",

  keywords: [
    "Musa Çivioğlu",
    "Musa Civioglu",
    "Pura Tercüme",
    "professional translator",
    "English teacher",
    "multilingual translator",
    "Antalya translator",
    "sworn translation",
    "yeminli tercüme",
    "çevirmen",
    "İngilizce öğretmeni",
    "ELT",
  ],

  authors: [{ name: "Musa Çivioğlu", url: siteUrl }],
  creator: "Musa Çivioğlu",
  publisher: "Musa Çivioğlu",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Musa Çivioğlu | Professional Translator & English Teacher",
    description:
      "Professional translator, English teacher, founder of Pura Tercüme, and multilingual language professional.",
    url: siteUrl,
    siteName: "Musa Çivioğlu",
    locale: "tr_TR",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Musa Çivioğlu | Professional Translator & English Teacher",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Musa Çivioğlu | Professional Translator & English Teacher",
    description:
      "Professional translator, English teacher, founder of Pura Tercüme, and multilingual language professional.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Musa Çivioğlu",
  alternateName: ["Musa Civioglu", "Musa Çivioglu"],
  url: siteUrl,
  image: `${siteUrl}/profile-photo.jpg`,
  jobTitle: ["Professional Translator", "English Teacher"],
  description:
    "Professional translator, English teacher, founder of Pura Tercüme, and multilingual language professional.",
  worksFor: {
    "@type": "Organization",
    name: "Pura Tercüme",
    url: "https://puratercume.com",
  },
  founder: {
    "@type": "Organization",
    name: "Pura Tercüme",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Hasan Kalyoncu University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Anadolu University",
    },
  ],
  knowsLanguage: ["Turkish", "English", "Italian", "Spanish", "French"],
  sameAs: ["https://github.com/MusaCivioglu"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}