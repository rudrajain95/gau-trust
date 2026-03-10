"use client";

import { useState } from "react";

export default function LoginPage() {

const [mobile,setMobile]=useState("");
const [otp,setOtp]=useState("");
const [step,setStep]=useState(1);

const sendOTP = async () => {

if(mobile.length !== 10){
alert("Enter valid mobile number");
return;
}

const res = await fetch("/api/send-otp",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({ mobile })
});

const data = await res.json();

if(data.success){
alert("OTP Sent");
setStep(2);
}else{
alert(data.message);
}

};

const verifyOTP = async () => {

const res = await fetch("/api/verify-otp",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({ mobile, otp })
});

const data = await res.json();

if(data.success){

localStorage.setItem("customerMobile",mobile);

window.location.href="/dashboard";

}else{

alert(data.message);

}

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}}>

<div style={{
border:"1px solid #ddd",
padding:40,
borderRadius:10,
width:320
}}>

<h2>Customer Login</h2>

{step===1 && (

<>

<input
type="number"
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{padding:10,width:"100%",marginTop:20}}
/>

<button
onClick={sendOTP}
style={{
marginTop:20,
padding:10,
width:"100%",
background:"#1976d2",
color:"white",
border:"none",
borderRadius:5
}}
>
Send OTP
</button>

</>

)}

{step===2 && (

<>

<input
type="number"
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
style={{padding:10,width:"100%",marginTop:20}}
/>

<button
onClick={verifyOTP}
style={{
marginTop:20,
padding:10,
width:"100%",
background:"green",
color:"white",
border:"none",
borderRadius:5
}}
>
Verify OTP
</button>

</>

)}

</div>

</div>

);

}
