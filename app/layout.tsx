import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteUrl } from "@/lib/seo";

const googleAnalyticsId = "G-P7T267Q2R3";

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

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          gtag("js", new Date());
          gtag("config", "${googleAnalyticsId}");
        `}
      </Script>
    </html>
  );
}