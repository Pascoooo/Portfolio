import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "./providers";
import { CommandMenu } from "@/components/command-palette";
import { about } from "@/lib/data";
import JsonLd from "@/components/JsonLd";
import { Footer } from "@/components/home/footer";

const { descriptions } = about();

export const metadata: Metadata = {
  metadataBase: new URL("https://pasco.dev"),
  title: {
    default: "Nicolò Pacucci | Full-Stack Developer (Pasco)",
    template: "%s | Nicolò Pacucci (Pasco)",
  },
  description: descriptions[0].replaceAll("*", ""),
  keywords: [
    "Nicolò Pacucci",
    "Pasco",
    "Web Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Italy",
  ],
  alternates: {
    canonical: "https://pasco.dev",
  },
  authors: [{ name: "Nicolò Pacucci", url: "https://pasco.dev" }],
  creator: "Nicolò Pacucci",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pasco.dev",
    title: "Nicolò Pacucci | Full-Stack Developer (Pasco)",
    description: descriptions[0].replaceAll("*", ""),
    siteName: "Nicolò Pacucci (Pasco)",
    images: [
      {
        url: "/thumb.webp",
        width: 1200,
        height: 630,
        alt: "Nicolò Pacucci - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolò Pacucci | Full-Stack Developer (Pasco)",
    description: descriptions[0].replaceAll("*", ""),
    creator: "@NicoloPacucci",
    images: ["/thumb.webp"],
  },
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
};

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-public-sans",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body className={`${publicSans.className} antialiased overflow-x-hidden`}>
        <Providers>
          <Navbar />
          <CommandMenu />
          <main className="w-full max-w-[1024px] mx-auto px-4">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
