"use client";

import { useState } from "react";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [product, setProduct] = useState("Milk");
  const [quantity, setQuantity] = useState("");

  const submitOrder = async () => {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        mobile,
        address,
        product,
        quantity,
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Order placed successfully");
      setName("");
      setMobile("");
      setAddress("");
      setProduct("Milk");
      setQuantity("");
    } else {
      alert("Order failed");
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial", maxWidth: 600 }}>
      <h1>Place Your Order</h1>
      <p>Fresh dairy products delivered to your doorstep.</p>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, marginTop: 10 }}
      />

      <input
        placeholder="Mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, marginTop: 10 }}
      />

      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, marginTop: 10 }}
      />

      <select
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, marginTop: 10 }}
      >
        <option>Milk</option>
        <option>Paneer</option>
        <option>Ghee</option>
        <option>Curd</option>
        <option>Butter</option>
      </select>

      <input
        placeholder="Quantity (example: 2L / 1Kg / 500gm)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ display: "block", width: "100%", padding: 10, marginTop: 10 }}
      />

      <button
        onClick={submitOrder}
        style={{
          marginTop: 15,
          padding: 12,
          width: "100%",
          background: "green",
          color: "white",
          border: "none",
        }}
      >
        Place Order
      </button>
    </div>
  );
}
