"use client";

import { useEffect } from "react";

export default function AdminCustomers(){

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
}

},[]);

return(

<div style={{
padding:40,
fontFamily:"Arial"
}}>

<h1>Customers</h1>

<p>All registered customers will appear here.</p>

</div>

)

}
