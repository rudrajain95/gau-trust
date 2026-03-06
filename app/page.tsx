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
        <h2 style={{ fontSize: 32, marginBottom: 15 }}>About Gau Trust Milk</h2>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Gau Trust Milk is focused on delivering fresh and quality dairy products directly to
          customers. Our goal is to make daily milk delivery simple, reliable and professional.
        </p>
      </section>

      <section style={{ padding: "20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Our Products</h2>

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

      <section style={{ padding: "50px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Why Choose Us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          <div style={{ background: "#fff", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Fresh Products</h3>
            <p>Daily fresh dairy supply with focus on quality.</p>
          </div>

          <div style={{ background: "#fff", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Easy Ordering</h3>
            <p>Customers can place orders online in a simple way.</p>
          </div>

          <div style={{ background: "#fff", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>Trusted Delivery</h3>
            <p>Fast and reliable local milk delivery service.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, marginBottom: 15 }}>Contact</h2>
        <p style={{ fontSize: 18, lineHeight: 1.7 }}>
          Gau Trust Milk, Chhatarpur, Madhya Pradesh
          <br />
          Phone: +91 7024030008
        </p>
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
}              { name: "Curd", desc: "Fresh homemade style curd" },
              { name: "Butter", desc: "Quality dairy butter" },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  border: "1px solid #ddd",
                  padding: 20,
                  background: "white",
                  borderRadius: 10,
                }}
              >
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: "50px 30px", maxWidth: 1100, margin: "0 auto" }}>
        <h2>Why Choose Us</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>Fresh dairy products</li>
          <li>Trusted local delivery</li>
          <li>Easy order process</li>
          <li>Clean packaging and timely service</li>
          <li>Growing dairy-tech platform from Chhatarpur</li>
        </ul>
      </section>

      {/* Order section */}
      <section
        id="order"
        style={{ padding: "50px 30px", background: "#f7fff7" }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2>Place Your Order</h2>
          <p>Fill the details below and place your order.</p>

          <form
            action="/order"
            method="get"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 20,
            }}
          >
            <input
              placeholder="Full Name"
              style={{ padding: 12, fontSize: 16 }}
            />
            <input
              placeholder="Mobile Number"
              style={{ padding: 12, fontSize: 16 }}
            />
            <input
              placeholder="Address"
              style={{ padding: 12, fontSize: 16 }}
            />
            <button
              type="submit"
              style={{
                padding: 14,
                background: "green",
                color: "white",
                border: "none",
                fontSize: 16,
              }}
            >
              Continue to Order Form
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "50px 30px", maxWidth: 1100, margin: "0 auto" }}>
        <h2>Contact Us</h2>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Email: support@gautrustmilk.in</p>
        <p>Location: Chhatarpur, Madhya Pradesh</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px 30px",
          background: "#111",
          color: "white",
          textAlign: "center",
        }}
      >
        © 2026 Gau Trust Milk. All rights reserved.
      </footer>
    </div>
  );
}
