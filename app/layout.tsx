import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Al Siddeg Omer | Software Engineer",
    template: "%s | Al Siddeg Omer"
  },
  description:
    "Software engineer building full-stack, real-time, and operational software across IoT, fintech, healthcare, fuel operations, and public web platforms.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Al Siddeg Omer | Software Engineer",
    description:
      "Software engineer building full-stack, real-time, and operational software across IoT, fintech, healthcare, fuel operations, and public web platforms.",
    url: siteUrl,
    siteName: "Al Siddeg Omer Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Siddeg Omer | Software Engineer",
    description:
      "Software engineer building full-stack, real-time, and operational software across IoT, fintech, healthcare, fuel operations, and public web platforms."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
