"use client";

import { useEffect } from "react";

export default function AdminSettings(){

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

<h1>Admin Settings</h1>

<p>Admin configuration settings will appear here.</p>

</div>

)

}
