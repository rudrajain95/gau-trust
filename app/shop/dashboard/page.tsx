"use client";

import { useEffect, useState } from "react";

export default function ShopDashboardPage() {
  const [shopName, setShopName] = useState("");

  useEffect(() => {
    const login = localStorage.getItem("shopLogin");
    const savedShopName = localStorage.getItem("shopName") || "";

    if (!login) {
      window.location.href = "/shop/login";
      return;
    }

    setShopName(savedShopName);
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Shop Dashboard</h1>
      <p>Welcome, {shopName}</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        marginTop: 30
      }}>
        <a href="/shop/orders">
          <div style={card}>
            <h3>Orders</h3>
          </div>
        </a>

        <a href="/shop/products">
          <div style={card}>
            <h3>Products</h3>
          </div>
        </a>

        <div
          onClick={() => {
            localStorage.removeItem("shopLogin");
            localStorage.removeItem("shopId");
            localStorage.removeItem("shopName");
            window.location.href = "/shop/login";
          }}
          style={{ ...card, cursor: "pointer" }}
        >
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: 30,
  borderRadius: 10,
  textAlign: "center" as const
};
