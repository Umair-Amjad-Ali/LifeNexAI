import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://lifenexai.com";
const SITE_NAME = "LifeNex AI";
const SITE_DESCRIPTION =
  "LifeNex AI is a premium software engineering studio specializing in AI-powered healthcare platforms, cross-platform mobile apps, and enterprise web solutions. We transform ambitious ideas into production-grade digital products.";

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────────────────────
  title: {
    default: "LifeNex AI — AI-Powered Software Engineering Studio",
    template: "%s | LifeNex AI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "LifeNex AI",
    "software engineering",
    "AI healthcare",
    "mobile app development",
    "Flutter development",
    "Next.js agency",
    "enterprise web solutions",
    "React development",
    "full-stack development",
    "cross-platform apps",
    "UI/UX design",
    "custom software development",
    "healthcare AI platform",
    "Node.js backend",
    "production-grade software",
  ],
  authors: [{ name: "LifeNex AI", url: SITE_URL }],
  creator: "LifeNex AI",
  publisher: "LifeNex AI",

  // ── Canonical & Alternates ─────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },

  // ── Open Graph ─────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "LifeNex AI — AI-Powered Software Engineering Studio",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LifeNex AI — Premium Software Engineering Studio",
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "LifeNex AI — AI-Powered Software Engineering Studio",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@lifenexai",
  },

  // ── Robots ─────────────────────────────────────────────────
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

  // ── Icons ──────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ── Category ───────────────────────────────────────────────
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c1b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data — Organization + WebSite
function JsonLdSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/portfolio?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLdSchema />
      </head>
      <body className="min-h-full flex flex-col bg-[#03040b] text-white antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 w-full relative">{children}</main>
        <Footer theme="dark" />
      </body>
    </html>
  );
}
