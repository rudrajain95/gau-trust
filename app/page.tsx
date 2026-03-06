export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f8f8f8", color: "#111" }}>
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#ffffff",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: 10 }}>Gau Trust Milk</h1>
        <p style={{ fontSize: "18px", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
          Fresh milk and dairy products delivered with trust, quality and convenience.
        </p>

        <div style={{ marginTop: 30 }}>
          <a
            href="/order"
            style={{
              display: "inline-block",
              marginRight: 12,
              padding: "14px 24px",
              background: "green",
              color: "white",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: "bold",
            }}
          >
            Order Now
          </a>

          <a
            href="/admin/login"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              background: "#111",
              color: "white",
              textDecoration: "none",
              borderRadius: 6,
              fontWeight: "bold",
            }}
          >
            Admin Login
          </a>
        </div>
      </section>

      <section style={{ padding: "50px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32 }}>About Gau Trust Milk</h2>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Gau Trust Milk is focused on delivering fresh and quality dairy products directly to
          customers. Our goal is to make daily milk delivery simple, reliable and professional.
        </p>
      </section>

      <section style={{ padding: "20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32 }}>Our Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {["Milk", "Paneer", "Ghee", "Curd", "Butter"].map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 20,
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: 40,
          padding: 20,
          textAlign: "center",
          background: "#111",
          color: "#fff",
        }}
      >
        © 2026 Gau Trust Milk. All rights reserved.
      </footer>
    </main>
  );
}
