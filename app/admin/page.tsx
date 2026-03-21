"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("adminLogin");

    if (admin) {
      router.push("/admin/dashboard");
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      Redirecting...
    </div>
  );
}
