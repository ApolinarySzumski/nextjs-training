export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header style={{ textAlign: "center", color: "red" }}>Header</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
