export default function HomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #e0f7ff, #ffffff)"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px", color: "#0f172a" }}>
        🐄 Gau Trust
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px", color: "#334155" }}>
        Premium Dairy Marketplace + Subscription Platform
      </p>

      <button style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#0ea5e9",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Get Started
      </button>
    </div>
  );
}
