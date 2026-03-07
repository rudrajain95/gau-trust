"use client";

import { useState } from "react";

export default function TrackPage() {
  const [mobile, setMobile] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  const searchOrders = async () => {
    setMessage("");
    setOrders([]);

    const res = await fetch("/api/track-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mobile })
    });

    const data = await res.json();

    if (data.success) {
      if (data.orders.length === 0) {
        setMessage("No orders found for this mobile number.");
      } else {
        setOrders(data.orders);
      }
    } else {
      setMessage(data.message || "Something went wrong");
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Track Your Order</h1>

      <input
        placeholder="Enter mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{
          display: "block",
          marginTop: 20,
          padding: 12,
          width: 320,
          maxWidth: "100%"
        }}
      />

      <button
        onClick={searchOrders}
        style={{
          marginTop: 15,
          padding: "12px 18px",
          background: "#1e88e5",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer"
        }}
      >
        Check Status
      </button>

      {message && (
        <p style={{ marginTop: 20, color: "red" }}>{message}</p>
      )}

      {orders.length > 0 && (
        <div style={{ marginTop: 30 }}>
          <h2>Your Orders</h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: 10
              }}
            >
              <thead>
                <tr>
                  <th style={th}>Time</th>
                  <th style={th}>Product</th>
                  <th style={th}>Qty</th>
                  <th style={th}>Payment</th>
                  <th style={th}>Address</th>
                  <th style={th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td style={td}>
                      {new Date(order.createdAt).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata"
                      })}
                    </td>
                    <td style={td}>{order.product}</td>
                    <td style={td}>{order.quantity}</td>
                    <td style={td}>{order.payment}</td>
                    <td style={td}>{order.address}</td>
                    <td style={td}>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

const th = {
  border: "1px solid #ddd",
  padding: 10,
  background: "#f5f5f5",
  textAlign: "left" as const
};

const td = {
  border: "1px solid #ddd",
  padding: 10
};
