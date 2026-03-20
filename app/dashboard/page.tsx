"use client";

import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const mobile = localStorage.getItem("customerMobile");

    if (!mobile) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div
      style={{
        padding: 30,
        fontFamily: "Arial",
      }}
    >
      <h1>My Account</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 30,
        }}
      >
        <a href="/order">
          <div
            style={{
              padding: 30,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <h3>Place Order</h3>
          </div>
        </a>

        <a href="/orders">
          <div
            style={{
              padding: 30,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Order History</h3>
          </div>
        </a>

        <a href="/subscribe">
          <div
            style={{
              padding: 30,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Membership Plan</h3>
          </div>
        </a>

        <a href="/profile">
          <div
            style={{
              padding: 30,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>My Profile</h3>
          </div>
        </a>

        <a href="/track">
          <div
            style={{
              padding: 30,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
            }}
          >
            <h3>Live Order Tracking</h3>
          </div>
        </a>

        <div
          onClick={() => {
            localStorage.removeItem("customerMobile");
            window.location.href = "/";
          }}
          style={{
            padding: 30,
            border: "1px solid #ddd",
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
