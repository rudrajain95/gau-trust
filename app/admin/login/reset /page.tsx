"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  function changePassword() {

    const saved = localStorage.getItem("adminPass") || "GauTrust@123";

    if (oldPass !== saved) {
      alert("Wrong old password");
      return;
    }

    localStorage.setItem("adminPass", newPass);

    alert("Password changed");

    router.push("/admin/login");
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Reset Admin Password</h2>

      <input
        placeholder="Old Password"
        type="password"
        onChange={(e) => setOldPass(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="New Password"
        type="password"
        onChange={(e) => setNewPass(e.target.value)}
      />

      <br /><br />

      <button onClick={changePassword}>
        Change Password
      </button>
    </div>
  );
}
