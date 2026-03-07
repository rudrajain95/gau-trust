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

  const startPayment = async () => {
    if (!mobile) {
      alert("Customer mobile not found. Please order again.");
      return;
    }

    const res = await fetch("/api/create-payment", {
      method: "POST"
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Gau Trust Milk",
      description: "Monthly Subscription",
      order_id: order.id,

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
          window.location.href = "/order";
        } else {
          alert(verifyData.message || "Payment verification failed");
        }
      },

      prefill: {
        name: "Customer",
        contact: mobile
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

      <p>Your free trial has expired.</p>

      <h2>₹199 / Month</h2>

      <button
        onClick={startPayment}
        style={{
          padding: 15,
          background: "green",
          color: "white",
          border: "none",
          fontSize: 18,
          marginTop: 20,
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        Subscribe Now
      </button>
    </div>
  );
}
