"use client";

export default function SubscribePage(){

const startPayment = async ()=>{

const res = await fetch("/api/create-payment",{
method:"POST"
});

const order = await res.json();

const options = {

key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

amount: order.amount,

currency: "INR",

name: "Gau Trust Milk",

description: "Monthly Subscription",

order_id: order.id,

handler: function (response:any) {

alert("Payment Successful");

window.location.href="/order";

},

prefill: {

name:"Customer",

contact:""

},

theme:{
color:"#2e7d32"
}

};

const rzp = new (window as any).Razorpay(options);

rzp.open();

};

return(

<div style={{padding:40,fontFamily:"Arial",textAlign:"center"}}>

<h1>Subscription Required</h1>

<p>Your free trial has expired.</p>

<h2>₹199 / Month</h2>

<button

onClick={startPayment}

style={{
padding:15,
background:"green",
color:"white",
border:"none",
fontSize:18,
marginTop:20,
borderRadius:8
}}

>

Subscribe Now

</button>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

</div>

);

}
