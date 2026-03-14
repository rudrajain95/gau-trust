"use client";

import { useEffect,useState } from "react";

export default function ProfilePage(){

const [customer,setCustomer]=useState<any>(null);

useEffect(()=>{

const mobile = localStorage.getItem("customerMobile");

fetch(`/api/customer-profile?mobile=${mobile}`)
.then(res=>res.json())
.then(data=>setCustomer(data))

},[])

if(!customer){
return <div style={{padding:30}}>Loading...</div>
}

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Customer Profile</h1>

<p><b>Name:</b> {customer.name}</p>

<p><b>Mobile:</b> {customer.mobile}</p>

<p><b>Address:</b> {customer.address}</p>

<p><b>Wallet Coins:</b> {customer.coins}</p>

<p><b>Subscription:</b> {customer.subscription ? "Active" : "Not Active"}</p>

</div>

)

}
