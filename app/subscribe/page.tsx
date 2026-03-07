"use client";

import { useEffect, useState } from "react";

export default function SubscribePage() {
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    const savedMobile = localStorage.getItem("subscriptionMobile") || "";
    setMobile(savedMobile);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payNow = async () => {
    if (!mobile) {
      alert("Customer mobile not found. Please order again.");
      return;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "subscription",
        mobile: mobile,
        address: "subscription",
        product: "subscription",
        quantity: "1",
        payment: "online"
      })
    });

    const data = await res.json();

    if (!data.orderId) {
      alert("Unable to start payment");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      name: "Gau Trust",
      description: "Monthly Milk Subscription",
      order_id: data.orderId,
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            mobile: mobile
          })
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
          alert("Payment successful. Subscription activated.");
          localStorage.removeItem("subscriptionMobile");
          window.location.href = "/";
        } else {
          alert(verifyData.message || "Payment verification failed");
        }
      },
      theme: {
        color: "#2e7d32"
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial", textAlign: "center" }}>
      <h1>Subscription Required</h1>

      <p>Your 7 day free trial has expired.</p>

      <h2>Subscribe ₹199 / month</h2>

      <p>Enjoy free milk delivery and premium service.</p>

      <button
        onClick={payNow}
        style={{
          marginTop: 20,
          padding: 15,
          background: "green",
          color: "white",
          border: "none",
          fontSize: 16,
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        Subscribe Now
      </button>
    </div>
  );
}
