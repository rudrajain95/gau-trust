"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/login");
  }, [router]);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      Redirecting to login...
    </div>
  );
}
