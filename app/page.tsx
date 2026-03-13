"use client";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fbff", color: "#1f2937" }}>
      {/* HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 28px",
          background: "rgba(255,255,255,0.95)",
          borderBottom: "1px solid #e5e7eb",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: "linear-gradient(135deg,#0f172a,#1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 26,
              boxShadow: "0 10px 24px rgba(29,78,216,0.25)",
            }}
          >
            🐄
          </div>

          <div>
            <h2 style={{ margin: 0, fontSize: 24, color: "#0f172a" }}>Gau Trust Milk</h2>
            <p style={{ margin: "4px 0 0 0", fontSize: 13, color: "#64748b" }}>
              Premium Fresh Dairy Delivery
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="/signup">
            <button style={signupBtn}>Customer Signup</button>
          </a>

          <a href="/login">
            <button style={loginBtn}>Customer Login</button>
          </a>

          <a href="/admin/login">
            <button style={adminBtn}>Admin Login</button>
          </a>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          padding: "70px 28px 50px 28px",
          background:
            "linear-gradient(135deg, #e0f2fe 0%, #eff6ff 40%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 30,
            alignItems: "center",
          }}
        >
          <div>
            <div style={badge}>Trusted Cow Dairy Brand • Fresh Farm Delivery</div>

            <h1
              style={{
                fontSize: 52,
                lineHeight: 1.12,
                margin: "20px 0 18px 0",
                color: "#0f172a",
              }}
            >
              Pure Farm Fresh Milk
              <br />
              Delivered With Trust,
              <br />
              Quality & Daily Care
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: 760,
                margin: 0,
              }}
            >
              Gau Trust Milk brings premium farm fresh milk and dairy products directly to
              homes in Chhatarpur. Customers get freshness, purity, reliable delivery and
              complete confidence with daily farm video updates.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
              <a href="/signup">
                <button style={heroPrimaryBtn}>Start with Signup</button>
              </a>

              <a href="/login">
                <button style={heroSecondaryBtn}>Already a Customer? Login</button>
              </a>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 34 }}>
              <div style={miniStat}>
                <h3 style={miniStatNumber}>100%</h3>
                <p style={miniStatText}>Fresh Dairy Focus</p>
              </div>

              <div style={miniStat}>
                <h3 style={miniStatNumber}>7 Days</h3>
                <p style={miniStatText}>Trial Support</p>
              </div>

              <div style={miniStat}>
                <h3 style={miniStatNumber}>Daily</h3>
                <p style={miniStatText}>Farm Trust Updates</p>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 28,
              padding: 26,
              boxShadow: "0 20px 45px rgba(15,23,42,0.10)",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                height: 360,
                borderRadius: 24,
                background:
                  "linear-gradient(135deg,#dbeafe,#e0f2fe,#f8fafc)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 24,
                  background: "#1d4ed8",
                  color: "white",
                  fontSize: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 24px rgba(29,78,216,0.28)",
                }}
              >
                🐄
              </div>

              <h2 style={{ marginTop: 22, marginBottom: 10, color: "#0f172a" }}>
                Gau Trust Brand Promise
              </h2>

              <p style={{ color: "#475569", lineHeight: 1.7, maxWidth: 350 }}>
                Pure milk, trusted sourcing, dairy transparency, nearby shop choice and
                customer-first delivery service — all in one professional local platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST CARDS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 28px 40px 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginTop: -24,
          }}
        >
          <div style={trustCard}>
            <div style={trustIcon}>🎥</div>
            <h3 style={trustTitle}>Daily Farm Videos</h3>
            <p style={trustText}>Customer trust ke liye daily farm video transparency.</p>
          </div>

          <div style={trustCard}>
            <div style={trustIcon}>🥛</div>
            <h3 style={trustTitle}>Pure Fresh Milk</h3>
            <p style={trustText}>Fresh dairy supply with purity-focused service quality.</p>
          </div>

          <div style={trustCard}>
            <div style={trustIcon}>🏪</div>
            <h3 style={trustTitle}>Preferred Shop Choice</h3>
            <p style={trustText}>Customer apni pasand ya nearby dairy shop se order kar sakta hai.</p>
          </div>

          <div style={trustCard}>
            <div style={trustIcon}>🚚</div>
            <h3 style={trustTitle}>Reliable Delivery</h3>
            <p style={trustText}>Structured same-day and next-day delivery model.</p>
          </div>
        </div>
      </div>

      {/* ABOUT BRAND */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 28px 10px 28px" }}>
        <div
          style={{
            background: "#ffffff",
            borderRadius: 28,
            padding: 34,
            boxShadow: "0 12px 35px rgba(15,23,42,0.06)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={sectionTitle}>About Gau Trust</h2>
          <p style={sectionText}>
            Gau Trust Milk is a local dairy delivery platform designed to connect trusted farms,
            quality milk sources and nearby dairy shops with customers. Our focus is not just
            delivery, but dependable freshness, transparent sourcing, customer confidence and a
            professional local dairy experience.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
              marginTop: 26,
            }}
          >
            <div style={infoBox}>
              <h3 style={infoTitle}>Our Brand Identity</h3>
              <p style={infoText}>
                Cow dairy trust, premium freshness, local convenience and honest farm-backed quality.
              </p>
            </div>

            <div style={infoBox}>
              <h3 style={infoTitle}>Our Customer Promise</h3>
              <p style={infoText}>
                Safe delivery, product transparency, regular supply and smooth ordering experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DELIVERY POLICY */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 28px 10px 28px" }}>
        <h2 style={sectionTitle}>Delivery Policy</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 20,
          }}
        >
          <div style={policyCard}>
            <div style={policyIcon}>⭐</div>
            <h3 style={policyTitle}>Subscription Customers</h3>
            <p style={policyText}>
              Same-day delivery available for subscribed customers.
            </p>
            <p style={policyTime}>Delivery Window: 6 AM to 9 PM</p>
          </div>

          <div style={policyCard}>
            <div style={policyIcon}>📦</div>
            <h3 style={policyTitle}>Non-Subscription Customers</h3>
            <p style={policyText}>
              Orders can be placed anytime, but delivery will be scheduled for next morning.
            </p>
            <p style={policyTime}>Delivery Window: 7 AM to 11 AM</p>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 28px 20px 28px" }}>
        <h2 style={sectionTitle}>Our Products</h2>
        <p style={{ ...sectionText, maxWidth: 700 }}>
          Fresh milk and everyday dairy essentials delivered with quality and care.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 25,
          }}
        >
          <div style={productCard}>
            <div style={productIcon}>🥛</div>
            <h3 style={productTitle}>Milk</h3>
            <p style={productText}>Fresh daily milk for homes and families.</p>
          </div>

          <div style={productCard}>
            <div style={productIcon}>🧀</div>
            <h3 style={productTitle}>Paneer</h3>
            <p style={productText}>Soft and fresh paneer for healthy meals.</p>
          </div>

          <div style={productCard}>
            <div style={productIcon}>🥣</div>
            <h3 style={productTitle}>Curd</h3>
            <p style={productText}>Daily fresh curd with smooth taste.</p>
          </div>

          <div style={productCard}>
            <div style={productIcon}>🥤</div>
            <h3 style={productTitle}>Butter Milk</h3>
            <p style={productText}>Refreshing dairy drink for everyday use.</p>
          </div>

          <div style={productCard}>
            <div style={productIcon}>🧈</div>
            <h3 style={productTitle}>Butter</h3>
            <p style={productText}>Rich dairy butter with fresh quality.</p>
          </div>

          <div style={productCard}>
            <div style={productIcon}>🍞</div>
            <h3 style={productTitle}>Bread & Dairy Essentials</h3>
            <p style={productText}>Bread and other daily dairy products.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "35px 28px 50px 28px" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#0f172a,#1d4ed8)",
            color: "white",
            borderRadius: 28,
            padding: 36,
            textAlign: "center",
            boxShadow: "0 18px 40px rgba(15,23,42,0.22)",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: 34 }}>Start Your Gau Trust Experience</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 760, margin: "0 auto" }}>
            Sign up today to experience trusted dairy delivery, fresh farm products and a
            professional milk service built for local families.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
            <a href="/signup">
              <button style={ctaSignupBtn}>Create Customer Account</button>
            </a>

            <a href="/login">
              <button style={ctaLoginBtn}>Customer Login</button>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: "#0f172a",
          color: "#e2e8f0",
          padding: "34px 28px",
          marginTop: 20,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: 30,
          }}
        >
          <div>
            <h3 style={{ marginTop: 0, color: "white" }}>Gau Trust Milk</h3>
            <p style={footerText}>
              A trusted dairy delivery platform focused on freshness, transparency and local
              service quality.
            </p>
          </div>

          <div>
            <h4 style={footerHeading}>Quick Access</h4>
            <p style={footerText}>Customer Signup</p>
            <p style={footerText}>Customer Login</p>
            <p style={footerText}>Admin Login</p>
          </div>

          <div>
            <h4 style={footerHeading}>Service Area</h4>
            <p style={footerText}>Chhatarpur</p>
            <p style={footerText}>Fresh dairy home delivery</p>
            <p style={footerText}>Cow dairy trust model</p>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "26px auto 0 auto",
            paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            textAlign: "center",
            color: "#94a3b8",
            fontSize: 14,
          }}
        >
          © 2026 Gau Trust Milk • Premium Fresh Dairy Delivery
        </div>
      </div>
    </div>
  );
}

const badge = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: 999,
  background: "#dbeafe",
  color: "#1d4ed8",
  fontWeight: 700,
  fontSize: 13,
};

const signupBtn = {
  padding: "10px 16px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const loginBtn = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const adminBtn = {
  padding: "10px 16px",
  background: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const heroPrimaryBtn = {
  padding: "14px 20px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 10px 20px rgba(22,163,74,0.25)",
};

const heroSecondaryBtn = {
  padding: "14px 20px",
  background: "#ffffff",
  color: "#0f172a",
  border: "1px solid #d1d5db",
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
};

const miniStat = {
  background: "#ffffff",
  padding: "16px 18px",
  borderRadius: 16,
  minWidth: 140,
  boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
  border: "1px solid #e5e7eb",
};

const miniStatNumber = {
  margin: 0,
  color: "#1d4ed8",
  fontSize: 24,
};

const miniStatText = {
  margin: "6px 0 0 0",
  color: "#64748b",
  fontSize: 14,
};

const trustCard = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 22,
  boxShadow: "0 12px 35px rgba(15,23,42,0.08)",
  border: "1px solid #e5e7eb",
};

const trustIcon = {
  fontSize: 28,
};

const trustTitle = {
  margin: "14px 0 8px 0",
  color: "#0f172a",
};

const trustText = {
  margin: 0,
  color: "#64748b",
  lineHeight: 1.6,
  fontSize: 14,
};

const sectionTitle = {
  margin: 0,
  fontSize: 34,
  color: "#0f172a",
};

const sectionText = {
  marginTop: 14,
  color: "#475569",
  lineHeight: 1.8,
  fontSize: 17,
};

const infoBox = {
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  padding: 22,
  borderRadius: 18,
};

const infoTitle = {
  margin: "0 0 8px 0",
  color: "#0f172a",
};

const infoText = {
  margin: 0,
  color: "#64748b",
  lineHeight: 1.7,
};

const policyCard = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 26,
  border: "1px solid #e5e7eb",
  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
};

const policyIcon = {
  fontSize: 26,
};

const policyTitle = {
  margin: "12px 0 8px 0",
  color: "#0f172a",
};

const policyText = {
  margin: 0,
  color: "#64748b",
  lineHeight: 1.7,
};

const policyTime = {
  marginTop: 12,
  color: "#1d4ed8",
  fontWeight: 700,
};

const productCard = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 24,
  border: "1px solid #e5e7eb",
  boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
};

const productIcon = {
  fontSize: 30,
};

const productTitle = {
  margin: "14px 0 8px 0",
  color: "#0f172a",
};

const productText = {
  margin: 0,
  color: "#64748b",
  lineHeight: 1.7,
};

const ctaSignupBtn = {
  padding: "14px 22px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
};

const ctaLoginBtn = {
  padding: "14px 22px",
  background: "#ffffff",
  color: "#0f172a",
  border: "none",
  borderRadius: 12,
  fontWeight: 700,
  cursor: "pointer",
};

const footerHeading = {
  marginTop: 0,
  color: "white",
};

const footerText = {
  margin: "8px 0",
  color: "#cbd5e1",
  lineHeight: 1.7,
};
