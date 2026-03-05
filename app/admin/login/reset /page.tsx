"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword() {

  const router = useRouter();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function changePassword() {

    const saved = localStorage.getItem("adminPass") || "GauTrust@123";

    if (oldPassword !== saved) {
      alert("Wrong old password");
      return;
    }

    localStorage.setItem("adminPass", newPassword);

    alert("Password changed successfully");

    router.push("/admin/login");
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial", maxWidth: 400 }}>

      <h2>Reset Admin Password</h2>

      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      <button
        onClick={changePassword}
        style={{
          marginTop: 15,
          width: "100%",
          padding: 10,
          background: "green",
          color: "white",
          border: "none"
        }}
      >
        Change Password
      </button>

    </div>
  );
}
