"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const admin = localStorage.getItem("adminLogin");

    if (!admin) {
      window.location.href = "/admin/login";
      return;
    }

    loadOrders();
  }, []);

  const loadOrders = async () => {
    const res = await fetch("/api/admin/orders");
    const data = await res.json();
    setOrders(data);
  };

  const updateShopStatus = async (id: string, shopStatus: string) => {
    const res = await fetch("/api/admin/orders/shop-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, shopStatus })
    });

    const data = await res.json();

    if (data.success) {
      loadOrders();
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
<h1>Order Management</h1>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: 20
      }}>
        <thead>
          <tr>
            <th style={th}>Order Time</th>
<th style={th}>Customer Name</th>
<th style={th}>Mobile Number</th>
<th style={th}>Product</th>
<th style={th}>Quantity</th>
<th style={th}>Payment Method</th>
<th style={th}>Delivery Address</th>
<th style={th}>Shop Processing</th>
<th style={th}>Delivery Progress</th>
<th style={th}>Assigned Delivery Partner</th>
<th style={th}>Shop Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o: any) => (
            <tr key={o.id}>
              <td style={td}>{new Date(o.createdAt).toLocaleString()}</td>
              <td style={td}>{o.name}</td>
              <td style={td}>{o.mobile}</td>
              <td style={td}>{o.product}</td>
              <td style={td}>{o.quantity}</td>
              <td style={td}>{o.payment}</td>
              <td style={td}>{o.address}</td>
              <td style={td}>{o.shopStatus}</td>
              <td style={td}>{o.deliveryStatus}</td>
              <td style={td}>{o.deliveryBoyName || "-"}</td>
              <td style={td}>
                <button
                  onClick={() => updateShopStatus(o.id, "Accepted")}
                  style={btnGreen}
                >
                  Accept
                </button>

                <button
                  onClick={() => updateShopStatus(o.id, "Rejected")}
                  style={{ ...btnRed, marginLeft: 6 }}
                >
                  Reject
                </button>

                <button
                  onClick={() => updateShopStatus(o.id, "Preparing")}
                  style={{ ...btnOrange, marginLeft: 6 }}
                >
                  Preparing
                </button>

                <button
                  onClick={() => updateShopStatus(o.id, "Ready")}
                  style={{ ...btnBlue, marginLeft: 6 }}
                >
                  Ready
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  border: "1px solid #ddd",
  padding: 8,
  background: "#f5f5f5"
};

const td = {
  border: "1px solid #ddd",
  padding: 8
};

const btnGreen = {
  padding: "6px 10px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: 4
};

const btnRed = {
  padding: "6px 10px",
  background: "#f44336",
  color: "white",
  border: "none",
  borderRadius: 4
};

const btnOrange = {
  padding: "6px 10px",
  background: "#ff9800",
  color: "white",
  border: "none",
  borderRadius: 4
};

const btnBlue = {
  padding: "6px 10px",
  background: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: 4
};
