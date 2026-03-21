"use client";

import { useEffect } from "react";

export default function AdminDashboard() {
  useEffect(() => {
    const admin = localStorage.getItem("adminLogin");

    if (!admin) {
      window.location.href = "/admin/login";
    }
  }, []);

  return (
    <div
      style={{
        padding: 40,
        fontFamily: "Arial",
      }}
    >
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 30,
          marginTop: 40,
        }}
      >
        <a href="/admin/shops">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Shop Partners</h3>
          </div>
        </a>

        <a href="/admin/products">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Product Catalog</h3>
          </div>
        </a>

        <a href="/admin/orders">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Order Management</h3>
          </div>
        </a>

        <a href="/admin/delivery">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Delivery Operations</h3>
          </div>
        </a>

        <a href="/admin/customers">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Customer Management</h3>
          </div>
        </a>

        <a href="/admin/settings">
          <div
            style={{
              border: "1px solid #ddd",
              padding: 30,
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Platform Settings</h3>
          </div>
        </a>

        <div
          onClick={() => {
            localStorage.removeItem("adminLogin");
            document.cookie = "admin_auth=; path=/; max-age=0";
            window.location.href = "/admin/login";
          }}
          style={{
            border: "1px solid #ddd",
            padding: 30,
            borderRadius: 10,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}
