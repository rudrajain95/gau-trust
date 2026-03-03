"use client";
import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: "",
    timeSlot: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Lead Data:", form);
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h1>🐄 Gau Trust</h1>
      <p>7 Day FREE Fresh Milk Delivery Trial</p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="phone" placeholder="Mobile Number" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="quantity" placeholder="Milk Quantity (1L / 2L)" onChange={handleChange} required />
        <input name="timeSlot" placeholder="Preferred Time (6-7AM)" onChange={handleChange} required />
        <button type="submit">Start Free Trial</button>
      </form>
    </div>
  );
}
