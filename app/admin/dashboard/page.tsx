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
    <div className="page-container">
      <h1 className="page-title">Gau Trust Admin Control Panel</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
        <a href="/admin/shops">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Shop Partners</h3>
            <p style={{ marginTop: 10 }}>Create, enable, disable and manage shops</p>
          </div>
        </a>

        <a href="/admin/products">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Product Catalog</h3>
            <p style={{ marginTop: 10 }}>Add, edit and manage dairy products</p>
          </div>
        </a>

        <a href="/admin/orders">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Order Management</h3>
            <p style={{ marginTop: 10 }}>Monitor all customer orders</p>
          </div>
        </a>

        <a href="/admin/delivery">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Delivery Operations</h3>
            <p style={{ marginTop: 10 }}>Manage delivery partners and status</p>
          </div>
        </a>

        <a href="/admin/customers">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Customer Management</h3>
            <p style={{ marginTop: 10 }}>View customers, plans and rewards</p>
          </div>
        </a>

        <a href="/admin/settings">
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Platform Settings</h3>
            <p style={{ marginTop: 10 }}>Control platform level settings</p>
          </div>
        </a>

        <div
          className="card"
          onClick={() => {
            localStorage.removeItem("adminLogin");
            document.cookie = "admin_auth=; path=/; max-age=0";
            window.location.href = "/admin/login";
          }}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <h3>Logout</h3>
          <p style={{ marginTop: 10 }}>Securely sign out from admin panel</p>
        </div>
      </div>
    </div>
  );
}
