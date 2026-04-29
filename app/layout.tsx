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
      "SS Fabrication | Best Steel, Iron & Aluminium Work in Piro, Ara, Bihar",
    template: "%s | SS Fabrication – Piro, Bihar",
  },
  description:
    "SS Fabrication (a unit of SS Engineering Company) – top-rated steel, iron & aluminium fabrication workshop in Piro, Ara, Bhojpur, Bihar. Custom steel gate, iron grill, aluminium door-window, SS railing, tin shed, rolling shutter, steel furniture & modular kitchen. लोहे का गेट, ग्रिल, एल्युमीनियम दरवाजा-खिड़की बनवाएं। Serving Patna, Buxar, Sasaram, Rohtas, Gaya & all of Bihar. Call +91 76268 81601.",

  /* ─── Extended Keywords (local Bihar SEO — English + Hinglish + Hindi) ─── */
  keywords: [
    // ── Brand ──
    "SS Fabrication",
    "SS Fabrication Bihar",
    "SS Engineering Company",
    "SS Engineering Company Bihar",
    "ssengico",

    // ── Core business (English) ──
    "Steel Fabrication Bihar",
    "Iron Fabrication Bihar",
    "Aluminium Fabrication Bihar",
    "Metal Fabrication Bihar",
    "Steel Work Bihar",
    "Iron Work Bihar",
    "Aluminium Work Bihar",
    "Metal Work Bihar",
    "SS Work Bihar",
    "Welding Work Bihar",
    "Fabrication Workshop Bihar",

    // ── Core business (Hinglish — how rural Bihar actually searches) ──
    "Steel ka Kaam Bihar",
    "Loha Ka Kaam Bihar",
    "Lohe ka kaam karne wala",
    "Aluminium ka kaam Bihar",
    "Welding ka kaam",
    "Fabrication ka kaam",

    // ── "Near Me" searches (TOP PRIORITY — highest search volume) ──
    "welding shop near me",
    "fabrication shop near me",
    "steel gate shop near me",
    "iron grill shop near me",
    "aluminium door shop near me",
    "steel furniture shop near me",
    "gate grill shop near me",
    "welding ki dukan near me",
    "grill banane wala near me",
    "gate banane wala near me",
    "lohe ka gate near me",
    "fabrication shop mere paas",
    "welder near me Bihar",

    // ── Product: Gates ──
    "Steel Gate Bihar",
    "Iron Gate Bihar",
    "SS Gate Bihar",
    "Main Gate Fabrication Bihar",
    "Sliding Gate Bihar",
    "Collapsible Gate Bihar",
    "Custom Steel Gate Bihar",
    "Designer Gate Bihar",
    "lohe ka gate",
    "steel ka gate",
    "gate banwana hai",
    "gate grill Bihar",
    "designer gate banane wala",

    // ── Product: Grills ──
    "Iron Grill Bihar",
    "Window Grill Bihar",
    "Safety Grill Bihar",
    "Balcony Grill Bihar",
    "Iron Window Guard Bihar",
    "lohe ka jangla",
    "khidki ka grill",
    "jangla lagwana",
    "grill banane wala",
    "grill ka kaam",

    // ── Product: Doors & Windows ──
    "Steel Door Bihar",
    "Aluminium Door Bihar",
    "Safety Door Bihar",
    "Aluminium Window Bihar",
    "Steel Window Bihar",
    "Window Frame Bihar",
    "Aluminium Partition Bihar",
    "steel ka darwaza",
    "aluminium ka darwaza",
    "aluminium ki khidki",
    "khidki ka frame",

    // ── Product: Railings ──
    "Stainless Steel Railing Bihar",
    "Staircase Railing Bihar",
    "Balcony Railing Bihar",
    "SS Railing Bihar",
    "Steel Railing Design",
    "sidi ki railing",
    "balcony ki railing",
    "reling lagwana",

    // ── Product: Furniture ──
    "Steel Bed Bihar",
    "Steel Almirah Bihar",
    "Steel Table Chair Bihar",
    "Steel Rack Bihar",
    "Custom Furniture Bihar",
    "Modular Kitchen Bihar",
    "steel ka palang",
    "lohe ka palang",
    "steel ka almirah",
    "lohe ka table",
    "rack banwana",

    // ── Product: Jhula ──
    "Iron Jhula Bihar",
    "Steel Jhula Bihar",
    "Garden Swing Steel",
    "lohe ka jhula",
    "jhula banwana",

    // ── Product: Shed & Shutter ──
    "Tin Shed Bihar",
    "Steel Shed Bihar",
    "Factory Shed Fabrication Bihar",
    "Shed Fabrication Bihar",
    "Rolling Shutter Bihar",
    "Shop Shutter Bihar",
    "tin shed lagwana",
    "shed ka kaam",
    "dukan ka shutter",
    "rolling shutter lagwana",

    // ── Product: Chajja / Canopy ──
    "Door Canopy Bihar",
    "Steel Chajja Bihar",
    "chajja lagwana",
    "darwaze ka chajja",

    // ── Product: Commercial ──
    "Commercial Interior Bihar",
    "Shop Interior Fabrication Bihar",
    "Office Furniture Steel Bihar",

    // ── Design / Inspiration keywords ──
    "steel gate design",
    "gate grill design",
    "gate grill design photo",
    "latest gate design",
    "modern window grill design",
    "staircase railing design",
    "SS railing design",
    "balcony grill design",
    "steel almirah design",
    "new gate design 2026",

    // ── Trade / Profession terms ──
    "Best Welder Bihar",
    "Best Fabrication Workshop Bihar",
    "Lohara Bihar",
    "lohar",
    "mistri",
    "karigar",
    "welding wala",
    "fabrication wala",
    "steel ka mistri",

    // ── Piro & nearby blocks ──
    "Fabrication Piro Bihar",
    "Steel Gate Piro",
    "Iron Grill Piro Bihar",
    "Aluminium Window Piro",
    "Steel Work Piro",
    "Furniture Piro Bihar",
    "Welding Shop Piro",

    // ── Ara & Bhojpur ──
    "Fabrication Ara Bihar",
    "Steel Gate Ara",
    "Iron Grill Ara Bihar",
    "Aluminium Door Ara Bihar",
    "Furniture Ara Bihar",
    "Welding Shop Ara",
    "Steel Work Bhojpur",
    "Fabrication Bhojpur Bihar",

    // ── Bhojpur block towns ──
    "Steel Work Koilwar",
    "Fabrication Jagdishpur Bihar",
    "Steel Gate Shahpur Bihar",
    "Welding Sandesh Bihar",
    "Fabrication Tarari Bihar",
    "Steel Work Agiaon",
    "Fabrication Udwantnagar",
    "Steel Gate Charpokhari",
    "Welding Garhani Bihar",
    "Fabrication Sahar Bihar",

    // ── District-level cities ──
    "Steel Fabrication Patna",
    "Iron Work Patna Bihar",
    "Aluminium Window Patna",
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
    "Steel Gate Dumraon",
    "Fabrication Bhabua",
    "Welding Dehri Bihar",
    "Steel Work Bikramganj",
    "Fabrication Chapra Bihar",

    // ── Hindi / Devanagari script (matches Hindi-typed Google searches) ──
    "वेल्डिंग शॉप",
    "स्टील फैब्रिकेशन",
    "लोहे का गेट",
    "लोहे का ग्रिल",
    "एल्युमीनियम का दरवाजा",
    "स्टील का पलंग",
    "लोहे का जंगला",
    "ग्रिल बनाने वाला",
    "गेट बनाने वाला",
    "वेल्डिंग की दुकान",
    "टिन शेड बिहार",
    "स्टील गेट पीरो",
    "फैब्रिकेशन आरा बिहार",
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
      "SS Fabrication | Premium Steel, Iron & Aluminium Work in Bihar",
    description:
      "Top-rated fabrication of steel gates, iron grills, aluminium windows, railings, and custom furniture in Piro, Ara, Bihar. 4.9★ on Google. Call +91 76268 81601.",
    url: "https://ssengico.com/",
    siteName: "SS Fabrication",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/shopFront.jpg",
        width: 1200,
        height: 630,
        alt: "SS Fabrication – Steel & Aluminium Workshop in Piro, Bihar",
      },
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "SS Fabrication Logo",
      },
    ],
  },

  /* ─── Twitter / X Card ─── */
  twitter: {
    card: "summary_large_image",
    title:
      "SS Fabrication | Best Steel & Aluminium Work in Bihar",
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
  applicationName: "SS Fabrication",
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
