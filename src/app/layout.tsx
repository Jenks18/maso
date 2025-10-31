import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL('https://iannjenga.com'),
  title: "Ian Njenga | Tinkerer & Builder",
  description: "Portfolio of side projects and prototypes spanning community platforms, ML for education, fintech and tooling for small businesses.",
  keywords: ["developer", "portfolio", "projects", "Kenya", "fintech", "ML", "community"],
  authors: [{ name: "Ian Njenga" }],
  openGraph: {
    title: "Ian Njenga | Tinkerer & Builder",
    description: "Portfolio of side projects and prototypes spanning community platforms, ML for education, fintech and tooling for small businesses.",
    url: "https://iannjenga.com",
    siteName: "Ian Njenga",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Njenga | Tinkerer & Builder",
    description: "Portfolio of side projects and prototypes spanning community platforms, ML for education, fintech and tooling for small businesses.",
    creator: "@iannjenga00",
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
