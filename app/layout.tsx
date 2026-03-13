export const metadata = {
  title: "Gau Trust Milk | Fresh Milk Delivery in Chhatarpur",

  description:
    "Gau Trust Milk delivers fresh farm milk and dairy products in Chhatarpur. Daily farm videos, trusted dairy farms and reliable home delivery service.",

  keywords: [
    "milk delivery chhatarpur",
    "fresh milk chhatarpur",
    "dairy delivery chhatarpur",
    "gau trust milk",
    "cow milk delivery",
    "milk home delivery"
  ],

  authors: [{ name: "Gau Trust Milk" }],

  openGraph: {
    title: "Gau Trust Milk",
    description:
      "Fresh farm milk delivery platform in Chhatarpur with trusted dairy farms and home delivery.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
