"use client";

export default function SubscribePage(){

  const payNow = () => {

    alert("Subscription payment coming soon");

  }

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
          fontSize:16
        }}
      >
        Subscribe Now
      </button>

    </div>

  )

}
