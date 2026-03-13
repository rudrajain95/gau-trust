import "./globals.css";

export const metadata = {
  title: "Gau Trust Milk | Fresh Dairy Delivery in Chhatarpur",
  description:
    "Gau Trust Milk delivers fresh farm milk and dairy products directly to homes in Chhatarpur. Trusted dairy platform with daily farm transparency and reliable delivery.",
  keywords:
    "Gau Trust Milk, Milk delivery Chhatarpur, Fresh milk Chhatarpur, Dairy delivery Chhatarpur, Cow milk Chhatarpur",
  authors: [{ name: "Gau Trust Milk" }],
  creator: "Gau Trust Milk",
  openGraph: {
    title: "Gau Trust Milk",
    description:
      "Fresh farm milk delivery platform in Chhatarpur with trusted dairy sourcing.",
    url: "https://www.gautrustmilk.in",
    siteName: "Gau Trust Milk",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
