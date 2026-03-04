export const metadata = {
  title: "Gau Trust",
  description: "Premium Dairy Marketplace",
  verification: {
    google: "dpwXPKxiCgb2PmMek9EoNGXKKzKul6aqYr-sMO--iJI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>{children}</body>
    </html>
  );
}
