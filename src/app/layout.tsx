import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SportPredict - AI Sports Match Predictions",
  description:
    "Get accurate AI-powered predictions for Cricket, Tennis, and Football matches. Boost your winning chances with SportPredict insights.",
  keywords: [
    "SportPredict",
    "Sports Predictions",
    "AI Match Predictions",
    "Cricket Predictions",
    "Tennis Predictions",
    "Football Predictions",
    "AI Sports Analytics",
  ],
  authors: [{ name: "SportPredict Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
