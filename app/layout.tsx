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
  title: "SS Fabrication | Best Steel, Iron & Aluminium Work in Bihar & India",
  description: "SS Furniture & Fabrication (A Unit of SS Engineering Company) provides premium metal and wood fabrication services in Piro, Bihar. High-quality steel gates, iron works, and modern modular interiors.",
  keywords: ["Steel Fabrication Bihar", "Metal Work India", "Piro Bihar Fabrication", "SS Engineering Company", "Iron Grills Bihar", "Aluminium Windows Bihar", "Modular Kitchen Piro", "Custom Furniture Bihar"],
  icons: {
    icon: "/ssengico/images/logo.png",
  },
  openGraph: {
    title: "SS Fabrication | Premium Metal & Wood Solutions in Bihar",
    description: "Expert fabrication of steel, iron, and aluminium in Piro, Bihar. Trusted by 200+ clients across India.",
    url: "https://ssengico.com",
    siteName: "SS Furniture & Fabrication",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
