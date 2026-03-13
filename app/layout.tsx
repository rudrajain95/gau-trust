import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gau Trust Milk | Fresh Dairy Delivery in Chhatarpur",
  description:
    "Gau Trust Milk delivers fresh farm milk and dairy products directly to homes in Chhatarpur. Trusted local farms, fast delivery and transparent sourcing.",

  keywords: [
    "milk delivery chhatarpur",
    "fresh milk delivery",
    "cow milk chhatarpur",
    "dairy delivery chhatarpur",
    "gau trust milk",
    "farm fresh milk",
  ],

  authors: [{ name: "Gau Trust Milk" }],

  creator: "Gau Trust Milk",

  verification: {
    google: "uop5cQE3Oj83MmqkgT7CowgvBdTGOCKxPHmLSOuryqc",
  },

  openGraph: {
    title: "Gau Trust Milk | Fresh Milk Delivery",
    description:
      "Fresh farm milk delivered daily from trusted dairy farms in Chhatarpur.",
    url: "https://www.gautrustmilk.in",
    siteName: "Gau Trust Milk",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
