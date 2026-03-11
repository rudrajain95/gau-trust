"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const saved = localStorage.getItem("adminPass") || "GauTrust@123";

    if (username === "admin" && password === saved) {
      localStorage.setItem("adminLogin", "true");
      document.cookie = "admin_auth=1; path=/; max-age=86400; samesite=lax";
      router.push("/admin/dashboard");
    } else {
      alert("Wrong login");
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Gau Trust Milk Admin Login</h2>

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
          width: 200,
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
