"use client";

import { useEffect, useState } from "react";

export default function DeliveryDashboardPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [deliveryBoyName, setDeliveryBoyName] = useState("");
  const [deliveryBoyId, setDeliveryBoyId] = useState("");

  useEffect(() => {
    const deliveryLogin = localStorage.getItem("deliveryLogin");
    const savedName = localStorage.getItem("deliveryBoyName") || "";
    const savedId = localStorage.getItem("deliveryBoyId") || "";

    if (!deliveryLogin) {
      window.location.href = "/delivery/login";
      return;
    }

    setDeliveryBoyName(savedName);
    setDeliveryBoyId(savedId);

    if (savedId) {
      loadOrders(savedId);
    }
  }, []);

  const loadOrders = async (id: string) => {
    const res = await fetch(`/api/delivery/orders?deliveryBoyId=${id}`);
    const data = await res.json();
    setOrders(data);
  };

  const updateDeliveryStatus = async (id: string, deliveryStatus: string) => {
    const res = await fetch("/api/delivery/update-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        deliveryStatus,
        deliveryBoyId,
        deliveryBoyName
      })
    });

    const data = await res.json();

    if (data.success) {
      alert("Status updated");
      loadOrders(deliveryBoyId);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Delivery Partner Panel</h1>
      <p>Logged in as: <b>{deliveryBoyName}</b></p>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}>
        <thead>
          <tr>
            <th style={th}>Customer Name</th>
            <th style={th}>Mobile</th>
            <th style={th}>Product</th>
            <th style={th}>Quantity</th>
            <th style={th}>Delivery Address</th>
            <th style={th}>Shop Status</th>
            <th style={th}>Delivery Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o: any) => (
            <tr key={o.id}>
              <td style={td}>{o.name}</td>
              <td style={td}>{o.mobile}</td>
              <td style={td}>{o.product}</td>
              <td style={td}>{o.quantity}</td>
              <td style={td}>{o.address}</td>
              <td style={td}>{o.shopStatus}</td>
              <td style={td}>{o.deliveryStatus}</td>
              <td style={td}>
                <button
                  onClick={() => updateDeliveryStatus(o.id, "Picked")}
                  style={btnOrange}
                >
                  Picked
                </button>

                <button
                  onClick={() => updateDeliveryStatus(o.id, "Out for Delivery")}
                  style={{ ...btnBlue, marginLeft: 8 }}
                >
                  Out for Delivery
                </button>

                <button
                  onClick={() => updateDeliveryStatus(o.id, "Delivered")}
                  style={{ ...btnGreen, marginLeft: 8 }}
                >
                  Delivered
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        onClick={() => {
          localStorage.removeItem("deliveryLogin");
          localStorage.removeItem("deliveryBoyName");
          localStorage.removeItem("deliveryBoyId");
          window.location.href = "/delivery/login";
        }}
        className="card"
        style={{
          marginTop: 25,
          display: "inline-block",
          cursor: "pointer"
        }}
      >
        Logout
      </div>
    </div>
  );
}

const th = {
  border: "1px solid #ddd",
  padding: 10,
  background: "#f5f5f5"
};

const td = {
  border: "1px solid #ddd",
  padding: 8
};

const btnOrange = {
  padding: "6px 10px",
  background: "#ff9800",
  color: "white",
  border: "none",
  borderRadius: 4,
  cursor: "pointer"
};

const btnBlue = {
  padding: "6px 10px",
  background: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: 4,
  cursor: "pointer"
};

const btnGreen = {
  padding: "6px 10px",
  background: "#2e7d32",
  color: "white",
  border: "none",
  borderRadius: 4,
  cursor: "pointer"
};
