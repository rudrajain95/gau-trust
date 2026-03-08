"use client";

export default function HomePage() {
  return (
    <div style={{ fontFamily: "Arial", background: "#eaf6ff" }}>
      
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
            alt="logo"
            width={40}
          />
          <h2 style={{ margin: 0 }}>Gau Trust Milk</h2>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <a href="/login">
            <button style={btn}>Customer Login</button>
          </a>

          <a href="/admin/login">
            <button style={btn}>Admin Login</button>
          </a>
        </div>
      </header>

      {/* BROADCAST */}
      <div
        style={{
          background: "#2196f3",
          color: "white",
          textAlign: "center",
          padding: 10
        }}
      >
        Fresh farm milk delivered daily in Chhatarpur 🥛
      </div>

      {/* HERO */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          gap: 40
        }}
      >
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ fontSize: 42 }}>
            Pure Milk Delivered to Your Home
          </h1>

          <p style={{ fontSize: 18 }}>
            Gau Trust Milk provides fresh dairy products sourced from trusted
            farms and delivered directly to your home every morning.
          </p>

          <a href="/order">
            <button
              style={{
                marginTop: 20,
                padding: "14px 28px",
                fontSize: 18,
                background: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: 8
              }}
            >
              Order Milk
            </button>
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1563636619-e9143da7973b"
          alt="cow milk"
          style={{ width: 400, borderRadius: 12 }}
        />
      </section>

      {/* DELIVERY POLICY */}
      <section
        style={{
          background: "white",
          padding: 40,
          textAlign: "center"
        }}
      >
        <h2>Delivery Policy</h2>

        <p style={{ maxWidth: 700, margin: "20px auto" }}>
          Subscription customers enjoy **same day milk delivery**. Orders placed
          before evening are delivered the **same day between 6 AM and 11 AM**.
        </p>

        <p style={{ maxWidth: 700, margin: "10px auto" }}>
          Customers without subscription can place orders anytime, but delivery
          will be **next day between 6 AM and 11 AM**.
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          padding: 40,
          textAlign: "center"
        }}
      >
        <h2>Our Products</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            marginTop: 30
          }}
        >
          <Product name="Milk" />
          <Product name="Paneer" />
          <Product name="Curd" />
          <Product name="Butter" />
          <Product name="Ghee" />
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          background: "white",
          padding: 40,
          textAlign: "center"
        }}
      >
        <h2>About Gau Trust Milk</h2>

        <p style={{ maxWidth: 700, margin: "20px auto" }}>
          Gau Trust Milk is a dairy delivery platform focused on providing
          fresh, hygienic and farm sourced milk to families. Our mission is to
          connect local dairy farms with households and ensure reliable daily
          delivery of quality dairy products.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1976d2",
          color: "white",
          textAlign: "center",
          padding: 20
        }}
      >
        © 2026 Gau Trust Milk
      </footer>
    </div>
  );
}

function Product({ name }: { name: string }) {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        width: 180,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{name}</h3>
    </div>
  );
}

const btn = {
  padding: "10px 16px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};
