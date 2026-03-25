"use client";

import { useState } from "react";

export default function DeliveryLoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!mobile || !password) {
      alert("Enter mobile and password");
      return;
    }

    const res = await fetch("/api/delivery/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile, password })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("deliveryLogin", "true");
      localStorage.setItem("deliveryBoyId", data.user.id);
      localStorage.setItem("deliveryBoyName", data.user.name);
      window.location.href = "/delivery/dashboard";
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Delivery Partner Login</h2>

      <input
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{ display: "block", marginTop: 10, padding: 10, width: 300 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginTop: 10, padding: 10, width: 300 }}
      />

      <button
        onClick={login}
        style={{
          marginTop: 15,
          padding: 10,
          width: 200,
          background: "#1976d2",
          color: "white",
          border: "none"
        }}
      >
        Login
      </button>
    </div>
  );
}
