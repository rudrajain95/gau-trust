"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminHome() {
  const router = useRouter();

  useEffect(() => {
    const logged = localStorage.getItem("adminLogged");

    if (!logged) {
      router.push("/admin/login");
    } else {
      router.push("/admin/leads");
    }
  }, [router]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      Checking login...
    </div>
  );
}
