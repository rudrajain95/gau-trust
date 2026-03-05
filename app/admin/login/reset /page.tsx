"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPage() {

  const [password,setPassword] = useState("");
  const router = useRouter();

  const savePassword = () => {
    localStorage.setItem("adminPass",password);
    alert("Password updated");
    router.push("/admin/login");
  }

  return (
    <div style={{padding:40,fontFamily:"Arial"}}>

      <h2>Reset Admin Password</h2>

      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:300}}
      />

      <button
        onClick={savePassword}
        style={{
          marginTop:15,
          padding:10,
          width:200,
          background:"green",
          color:"white",
          border:"none"
        }}
      >
        Save Password
      </button>

    </div>
  );
}
