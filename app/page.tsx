"use client";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 30px",
          borderBottom: "1px solid #ddd",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0, color: "green" }}>Gau Trust Milk</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <a href="#products">
            <button style={{ padding: "10px 14px", border: "1px solid #ccc" }}>
              Products
            </button>
          </a>
          <a href="#order">
            <button
              style={{
                padding: "10px 14px",
                background: "green",
                color: "white",
                border: "none",
              }}
            >
              Order Now
            </button>
          </a>
          <a href="/admin/login">
            <button
              style={{
                padding: "10px 14px",
                background: "black",
                color: "white",
                border: "none",
              }}
            >
              Admin Login
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "60px 30px",
          textAlign: "center",
          background: "#f7fff7",
        }}
      >
        <h1 style={{ fontSize: 42, marginBottom: 15 }}>
          Fresh Dairy Products Delivered to Your Home
        </h1>
        <p style={{ fontSize: 18, maxWidth: 700, margin: "0 auto 25px" }}>
          Gau Trust Milk brings fresh milk, paneer, ghee, curd and butter to your doorstep
          with trust, hygiene and timely delivery.
        </p>
        <a href="#order">
          <button
            style={{
              padding: "14px 24px",
              background: "green",
              color: "white",
              border: "none",
              fontSize: 16,
            }}
          >
            Start Ordering
          </button>
        </a>
      </section>

      {/* About */}
      <section style={{ padding: "50px 30px", maxWidth: 1100, margin: "0 auto" }}>
        <h2>About Gau Trust Milk</h2>
        <p style={{ lineHeight: 1.7 }}>
          Gau Trust Milk is a modern dairy delivery brand focused on pure and fresh dairy
          products. Our goal is to give families better quality milk and dairy products with
          easy ordering, reliable delivery and trusted service.
        </p>
      </section>

      {/* Products */}
      <section
        id="products"
        style={{ padding: "50px 30px", background: "#fafafa" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>Our Products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginTop: 20,
            }}
          >
            {[
              { name: "Milk", desc: "Fresh daily milk delivery" },
              { name: "Paneer", desc: "Soft and fresh paneer" },
              { name: "Ghee", desc: "Pure desi ghee" },
              { name: "Curd", desc: "Fresh homemade style curd" },
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
