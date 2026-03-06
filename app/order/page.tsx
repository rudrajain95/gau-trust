"use client"

import { useState } from "react"

export default function OrderPage() {

const [name,setName]=useState("")
const [mobile,setMobile]=useState("")
const [address,setAddress]=useState("")
const [product,setProduct]=useState("Milk")
const [qty,setQty]=useState("")

const submitOrder=async()=>{

await fetch("/api/order",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
mobile,
address,
product,
qty
})
})

alert("Order Submitted")

setName("")
setMobile("")
setAddress("")
setProduct("Milk")
setQty("")
}

return(

<div style={{maxWidth:600,margin:"40px auto",fontFamily:"Arial"}}>

<h1>Milk Order</h1>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:"100%"}}
/>

<input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:"100%"}}
/>

<input
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:"100%"}}
/>

<select
value={product}
onChange={(e)=>setProduct(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:"100%"}}
>

<option>Milk</option>
<option>Paneer</option>
<option>Ghee</option>
<option>Curd</option>
<option>Butter</option>

</select>

<input
placeholder="Quantity"
value={qty}
onChange={(e)=>setQty(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:"100%"}}
/>

<button
onClick={submitOrder}
style={{
marginTop:20,
padding:12,
background:"green",
color:"white",
border:"none",
width:"100%"
}}
>
Place Order
</button>

</div>

)

}
