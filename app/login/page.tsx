"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (mobile.length !== 10) {
      alert("Enter valid mobile number");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (data.success) {
        setStep(2);
        alert("OTP sent successfully");
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (error) {
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("customerMobile", mobile);
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (error) {
      alert("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: 20,
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: 30,
          borderRadius: 10,
          width: 340,
          background: "white",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Customer Login</h2>

        <input
          type="number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          disabled={step === 2}
          style={{ padding: 12, width: "100%", marginTop: 10, boxSizing: "border-box" }}
        />

        {step === 1 && (
          <button
            onClick={sendOtp}
            disabled={loading}
            style={{
              marginTop: 20,
              padding: 12,
              width: "100%",
              background: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: 6,
            }}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        )}

        {step === 2 && (
          <>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{ padding: 12, width: "100%", marginTop: 20, boxSizing: "border-box" }}
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              style={{
                marginTop: 20,
                padding: 12,
                width: "100%",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: 6,
              }}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
