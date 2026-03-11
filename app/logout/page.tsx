"use client";

import { useEffect } from "react";

export default function Logout(){

useEffect(()=>{

localStorage.removeItem("customerMobile");

window.location.href="/";

},[]);

return <p>Logging out...</p>

}
