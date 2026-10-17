import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ToastProvider } from "@/components/ui/Toast";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#001c37",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Section 8 Non-Profit Organization`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Neev Welfare Foundation",
    "Section 8 NGO",
    "80G Tax Exemption",
    "12A Certified NGO",
    "Jhansi NGO",
    "Bundelkhand rural development",
    "child education charity",
    "women self-help collectives",
    "healthcare camps Bundelkhand",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Section 8 Non-Profit Organization`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Grassroots Impact`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Section 8 Non-Profit Organization`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Garautha",
      addressLocality: "Jhansi",
      addressRegion: "Uttar Pradesh",
      postalCode: "284202",
      addressCountry: "IN",
    },
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    taxID: SITE_CONFIG.cin,
    nonprofitStatus: "Nonprofit501c3",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <ToastProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
