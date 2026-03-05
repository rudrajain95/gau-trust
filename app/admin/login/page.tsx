"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "GauTrust@123") {
      localStorage.setItem("adminLogged", "true");
      router.push("/admin");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial", maxWidth: 400 }}>
      <h2>Gau Trust Milk Admin Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "100%", padding: 8, marginTop: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: 8, marginTop: 10 }}
      />

      <button
        onClick={handleLogin}
        style={{
          marginTop: 15,
          padding: 10,
          width: "100%",
          background: "green",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}
