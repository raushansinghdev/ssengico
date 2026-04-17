import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070909",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ssengico.com"),

  /* ─── Core Title & Description ─── */
  title: {
    default:
      "SS Furniture & Fabrication | Best Steel, Iron & Aluminium Work in Piro, Ara, Bihar",
    template: "%s | SS Furniture & Fabrication – Piro, Bihar",
  },
  description:
    "SS Furniture & Fabrication (a unit of SS Engineering Company) is the top-rated fabrication workshop in Piro, Ara, Bhojpur, Bihar. We offer custom steel gates, iron grills, aluminium doors, windows, railings, and modular furniture. Serving Patna, Buxar, Sasaram, Rohtas, Gaya & all of Bihar. Call +91 76268 81601.",

  /* ─── Extended Keywords (local Bihar SEO) ─── */
  keywords: [
    // Core business
    "Steel Fabrication Bihar",
    "Iron Work Bihar",
    "Aluminium Fabrication Bihar",
    "Metal Work Bihar",
    "SS Furniture and Fabrication",
    "SS Engineering Company Bihar",
    "ssengico",
    // Piro & nearby
    "Fabrication Piro Bihar",
    "Steel Gate Piro",
    "Iron Grill Piro Bihar",
    "Aluminium Window Piro",
    "Steel Work Piro",
    "Furniture Piro Bihar",
    // Ara & Bhojpur
    "Fabrication Ara Bihar",
    "Steel Gate Ara",
    "Iron Grill Ara Bihar",
    "Aluminium Door Ara Bihar",
    "Furniture Ara Bihar",
    "Steel Work Bhojpur",
    "Fabrication Bhojpur Bihar",
    // Patna
    "Steel Fabrication Patna",
    "Iron Work Patna Bihar",
    "Aluminium Window Patna",
    // District-wide
    "Fabrication Buxar Bihar",
    "Steel Work Sasaram",
    "Fabrication Rohtas",
    "Iron Gate Aurangabad Bihar",
    "Steel Work Gaya Bihar",
    "Fabrication Nawada",
    "Metal Work Nalanda Bihar",
    "Steel Gate Jehanabad",
    "Fabrication Arwal Bihar",
    "Steel Work Kaimur Bihar",
    "Iron Grill Saran Bihar",
    // Product keywords
    "Custom Steel Gate Bihar",
    "Iron Window Guard Bihar",
    "Stainless Steel Railing Bihar",
    "Modular Kitchen Bihar",
    "Aluminium Partition Bihar",
    "Commercial Interior Bihar",
    "Custom Furniture Bihar",
    "Steel Bed Bihar",
    "Iron Jhula Bihar",
    "Balcony Railing Bihar",
    "Staircase Railing Bihar",
    "Steel Door Bihar",
    // General
    "Best Fabrication Workshop Bihar",
    "Welding Work Bihar",
    "Best Welder Bihar",
    "Lohara Bihar",
    "Loha Ka Kaam Bihar",
  ],

  /* ─── Canonical & Alternates ─── */
  alternates: {
    canonical: "https://ssengico.com/",
  },

  /* ─── Icons ─── */
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },

  /* ─── Open Graph (for WhatsApp, Facebook shares & Google rich results) ─── */
  openGraph: {
    title:
      "SS Furniture & Fabrication | Premium Steel, Iron & Aluminium Work in Bihar",
    description:
      "Top-rated fabrication of steel gates, iron grills, aluminium windows, railings, and custom furniture in Piro, Ara, Bihar. 4.9★ on Google. Call +91 76268 81601.",
    url: "https://ssengico.com/",
    siteName: "SS Furniture & Fabrication",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/shopFront.jpg",
        width: 1200,
        height: 630,
        alt: "SS Furniture & Fabrication – Steel & Aluminium Workshop in Piro, Bihar",
      },
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "SS Furniture & Fabrication Logo",
      },
    ],
  },

  /* ─── Twitter / X Card ─── */
  twitter: {
    card: "summary_large_image",
    title:
      "SS Furniture & Fabrication | Best Steel & Aluminium Work in Bihar",
    description:
      "Premium steel gates, iron grills, aluminium windows & custom furniture in Piro, Ara, Bihar. 4.9★ Google rating.",
    images: ["/images/shopFront.jpg"],
  },

  /* ─── Robots ─── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ─── App Info ─── */
  applicationName: "SS Furniture & Fabrication",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "SS Engineering Company", url: "https://ssengico.com" }],
  creator: "SS Engineering Company",
  publisher: "SS Engineering Company",
  category: "Steel & Metal Fabrication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Explicit manifest link for broad browser support */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Piro, Bhojpur, Bihar, India" />
        <meta name="geo.position" content="25.3208544;84.3987333" />
        <meta name="ICBM" content="25.3208544, 84.3987333" />
        {/* Language & Content */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
      </head>
      <body>{children}</body>
    </html>
  );
}
