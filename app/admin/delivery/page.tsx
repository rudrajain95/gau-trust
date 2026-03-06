"use client";

import { useRouter } from "next/navigation";

export default function DeliveryPage() {
  const router = useRouter();

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Gau Trust Milk - Delivery Dashboard</h1>

      <p>Today Deliveries: 0</p>
      <p>Yahan delivery boy planning, route map aur daily delivery list show hogi.</p>

      <ul>
        <li>WhatsApp Alert System</li>
        <li>Daily Milk Delivery Dashboard</li>
        <li>Delivery Boy Route Map</li>
      </ul>

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
          onClick={() => router.push("/admin/orders")}
          style={{
            padding: 10,
            background: "orange",
            color: "white",
            border: "none",
          }}
        >
          Go to Orders
        </button>
      </div>
    </div>
  );
}
