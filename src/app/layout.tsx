import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ehsanullah Ahmadzai | Portfolio",
  description:
    "Professional portfolio showcasing my work and experience as a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6604999753558254"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
