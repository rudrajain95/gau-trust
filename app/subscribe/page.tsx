"use client";

import { useEffect } from "react";

export default function SubscribePage(){

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);

  }, []);


  const payNow = async () => {

    const res = await fetch("/api/order",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"subscription",
        mobile:"subscription",
        address:"subscription",
        product:"subscription",
        quantity:1,
        payment:"online"
      })
    });

    const data = await res.json();

    const options = {

      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: data.amount,

      currency: "INR",

      name: "Gau Trust",

      description: "Monthly Milk Subscription",

      order_id: data.orderId,

      handler: function (){

        alert("Payment Successful 🎉");

        window.location.href="/";

      }

    };

    const rzp = new (window as any).Razorpay(options);

    rzp.open();

  };


  return(

    <div style={{padding:40,fontFamily:"Arial",textAlign:"center"}}>

      <h1>Subscription Required</h1>

      <p>Your 7 day free trial has expired.</p>

      <h2>Subscribe ₹199 / month</h2>

      <p>
        Enjoy free milk delivery and premium service.
      </p>

      <button
        onClick={payNow}
        style={{
          marginTop:20,
          padding:15,
          background:"green",
          color:"white",
          border:"none",
          fontSize:16,
          borderRadius:8,
          cursor:"pointer"
        }}
      >
        Subscribe Now
      </button>

    </div>

  )

}
