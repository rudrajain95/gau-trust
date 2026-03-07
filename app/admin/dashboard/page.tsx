"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const logout = () => {
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Gau Trust Admin Dashboard</h1>

      <hr />

      <h3>Milk Business Panel</h3>

      <p>Purchase Price: ₹50 / Litre</p>
      <p>Selling Price: ₹60 / Litre</p>
      <p>Profit: ₹10 / Litre</p>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => router.push("/admin/leads")}
          style={{
            padding: 10,
            background: "green",
            color: "white",
            border: "none",
            marginRight: 10,
          }}
        >
          View Leads
        </button>

        <button
          onClick={() => router.push("/admin/orders")}
          style={{
            padding: 10,
            background: "orange",
            color: "white",
            border: "none",
            marginRight: 10,
          }}
        >
          View Orders
        </button>

        <button
          onClick={() => router.push("/admin/delivery")}
          style={{
            padding: 10,
            background: "blue",
            color: "white",
            border: "none",
            marginRight: 10,
          }}
        >
          Delivery Dashboard
        </button>

        <button
          onClick={logout}
          style={{
            padding: 10,
            background: "black",
            color: "white",
            border: "none",
          }}
        >
          Logout
        </button>

        <a href="/admin/products">
<button style={{
background:"purple",
color:"white",
padding:"10px 16px",
border:"none",
marginRight:10
}}>
Products
</button>
</a>
      </div>
    </div>
  );
}
