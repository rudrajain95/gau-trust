"use client";

import { useState } from "react";

export default function ShopLoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const loginShop = async () => {
    if (!mobile || !password) {
      alert("Enter mobile and password");
      return;
    }

    const res = await fetch("/api/shops/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("shopLogin", "true");
      localStorage.setItem("shopId", data.shop.id);
      localStorage.setItem("shopName", data.shop.name);
      window.location.href = "/shop/dashboard";
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Shop Login</h2>

      <input
        placeholder="Shop Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{ display: "block", marginTop: 12, padding: 10, width: 320 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginTop: 12, padding: 10, width: 320 }}
      />

      <button
        onClick={loginShop}
        style={{
          marginTop: 16,
          padding: 10,
          width: 180,
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: 6
        }}
      >
        Login
      </button>
    </div>
  );
}
