export const metadata = {
  title: "Gau Trust",
  description: "Premium Dairy Marketplace"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">

<head>
<meta name="google-site-verification" content="dpwXPKxiCgb2PmMek9EoNGXKKzKul6aqYr-sMO--iJI" />
</head>

<body style={{ margin: 0, fontFamily: "sans-serif" }}>
{children}
</body>

</html>
