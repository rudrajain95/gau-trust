"use client";

import { useState } from "react";

export default function DeliveryLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "delivery" && password === "Delivery@123") {
      localStorage.setItem("deliveryLogin", "true");
      localStorage.setItem("deliveryBoyName", "Delivery Boy 1");
      window.location.href = "/delivery/dashboard";
    } else {
      alert("Wrong delivery login");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Gau Trust Delivery Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
          width: 220,
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
