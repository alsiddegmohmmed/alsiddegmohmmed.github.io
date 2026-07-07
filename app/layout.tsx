import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alsiddegmohmmed.vercel.app"),
  title: "Al Siddeg Omer | Senior Full-Stack Software Engineer",
  description:
    "Senior full-stack engineer in Dammam, Saudi Arabia building enterprise software across fintech infrastructure, IoT platforms, healthcare systems, SaaS products, and Arabic-first UX.",
  openGraph: {
    title: "Al Siddeg Omer | Senior Full-Stack Software Engineer",
    description:
      "Enterprise software across fintech infrastructure, IoT platforms, healthcare systems, SaaS products, and Arabic-first UX.",
    url: "https://alsiddegmohmmed.vercel.app",
    siteName: "Al Siddeg Omer Portfolio",
    images: [
      {
        url: "/images/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Al Siddeg Omer software engineering portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Siddeg Omer | Senior Full-Stack Software Engineer",
    description:
      "Enterprise software across fintech infrastructure, IoT platforms, healthcare systems, SaaS products, and Arabic-first UX.",
    images: ["/images/bg.jpg"]
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
