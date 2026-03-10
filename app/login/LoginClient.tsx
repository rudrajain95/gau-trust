"use client";

import { useState } from "react";

export default function LoginClient(){

const [mobile,setMobile]=useState("");
const [otp,setOtp]=useState("");
const [step,setStep]=useState(1);
const [confirmation,setConfirmation]=useState<any>(null);

const sendOTP = async () => {

if(mobile.length !== 10){
alert("Enter valid mobile number");
return;
}

try{

const firebase = await import("../firebase");
const auth = firebase.auth;

const firebaseAuth = await import("firebase/auth");

const RecaptchaVerifier = firebaseAuth.RecaptchaVerifier;
const signInWithPhoneNumber = firebaseAuth.signInWithPhoneNumber;

const recaptcha = new RecaptchaVerifier(
"recaptcha-container",
{ size: "invisible" },
auth
);

const phone = "+91" + mobile;

const result = await signInWithPhoneNumber(auth, phone, recaptcha);

setConfirmation(result);

setStep(2);

}catch(err){

alert("OTP send failed");

}

};
const verifyOTP=async()=>{

try{

await confirmation.confirm(otp);

localStorage.setItem("customerMobile",mobile);

window.location.href="/dashboard";

}catch(err){

alert("Invalid OTP");

}

};

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
fontFamily:"Arial"
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
style={{padding:12,width:"100%",marginTop:20}}
/>

<button
onClick={sendOTP}
style={{
marginTop:20,
padding:12,
width:"100%",
background:"#1976d2",
color:"white",
border:"none",
borderRadius:6
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
style={{padding:12,width:"100%",marginTop:20}}
/>

<button
onClick={verifyOTP}
style={{
marginTop:20,
padding:12,
width:"100%",
background:"green",
color:"white",
border:"none",
borderRadius:6
}}
>
Verify OTP
</button>

</>

)}

<div id="recaptcha-container"></div>

</div>

</div>

);

}
