"use client";

export default function HomePage() {
  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 42, marginBottom: 20 }}>Gau Trust Milk</h1>

      <p style={{ fontSize: 20, maxWidth: 700 }}>
        Fresh milk and dairy products delivered to your home.
      </p>

      <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a href="/order">
          <button
            style={{
              padding: "14px 22px",
              background: "green",
              color: "white",
              border: "none",
              fontSize: 18,
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            Customer Order
          </button>
        </a>

        <a href="/track">
          <button
            style={{
              padding: "14px 22px",
              background: "#1e88e5",
              color: "white",
              border: "none",
              fontSize: 18,
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            Track Order
          </button>
        </a>
        
  <a href="/dashboard">
<button style={{
padding:"14px 22px",
background:"#673ab7",
color:"white",
border:"none",
fontSize:18,
borderRadius:8
}}>
Customer Dashboard
</button>
</a>
        <a href="/admin/login">
          <button
            style={{
              padding: "14px 22px",
              background: "black",
              color: "white",
              border: "none",
              fontSize: 18,
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            Admin Login
          </button>
        </a>
        
      </div>
    </div>
  );
}
