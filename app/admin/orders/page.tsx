"use client";

import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Gau Trust Milk - Orders</h1>

      <p>Total Orders: 0</p>
      <p>Yahan customer ke milk, paneer, ghee, curd, butter orders show honge.</p>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => router.push("/admin/dashboard")}
          style={{
            padding: 10,
            background: "black",
            color: "white",
            border: "none",
            marginRight: 10,
          }}
        >
          Back to Dashboard
        </button>

        <button
          onClick={() => router.push("/admin/leads")}
          style={{
            padding: 10,
            background: "green",
            color: "white",
            border: "none",
          }}
        >
          Go to Leads
        </button>
      </div>
    </div>
  );
}
