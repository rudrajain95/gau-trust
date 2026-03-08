"use client";

import { useState } from "react";

export default function OrderPage(){

const [name,setName] = useState("");
const [mobile,setMobile] = useState("");
const [address,setAddress] = useState("");
const [product,setProduct] = useState("");
const [quantity,setQuantity] = useState("");
const [payment,setPayment] = useState("Cash on Delivery");

const products = [

{name:"Milk",price:"₹60 / Litre"},
{name:"Paneer",price:"₹350 / Kg"},
{name:"Curd",price:"₹80 / Kg"},
{name:"Butter",price:"₹500 / Kg"},
{name:"Ghee",price:"₹900 / Litre"}

];

const placeOrder = async ()=>{

if(!name || !mobile || !address || !product || !quantity){
alert("Please fill all fields");
return;
}

const res = await fetch("/api/order",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
mobile,
address,
product,
quantity,
payment
})
});

const data = await res.json();

if(data.success){

alert("Order placed successfully");

if(data.whatsappUrl){
window.open(data.whatsappUrl,"_blank");
}

setName("");
setMobile("");
setAddress("");
setProduct("");
setQuantity("");

}else{

alert(data.message);

}

};

return(

<div style={{padding:30,fontFamily:"Arial",maxWidth:700}}>

<h1>Customer Order</h1>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{display:"block",marginTop:10,padding:12,width:"100%"}}
/>

<input
placeholder="Mobile"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{display:"block",marginTop:10,padding:12,width:"100%"}}
/>

<input
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
style={{display:"block",marginTop:10,padding:12,width:"100%"}}
/>

<h2 style={{marginTop:30}}>Select Product</h2>

<div style={{
display:"flex",
gap:20,
flexWrap:"wrap",
marginTop:20
}}>

{products.map((p)=>(
<div
key={p.name}
onClick={()=>setProduct(p.name)}
style={{
border:"1px solid #ddd",
padding:20,
width:180,
cursor:"pointer",
borderRadius:10,
boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
background: product===p.name ? "#e3f2fd":"white"
}}
>

<h3>{p.name}</h3>

<p>{p.price}</p>

</div>
))}

</div>

<input
placeholder="Quantity (Example: 2L)"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
style={{display:"block",marginTop:20,padding:12,width:"100%"}}
/>

<select
value={payment}
onChange={(e)=>setPayment(e.target.value)}
style={{display:"block",marginTop:20,padding:12,width:"100%"}}
>

<option>Cash on Delivery</option>
<option>UPI Payment</option>
<option>Online Payment</option>

</select>

<p style={{marginTop:10,color:"#555"}}>
Milk delivery is free. Other products may include delivery charges.
</p>

<button
onClick={placeOrder}
style={{
marginTop:20,
padding:14,
background:"#2196f3",
color:"white",
border:"none",
fontSize:16,
borderRadius:8,
width:"100%"
}}
>

Place Order

</button>

</div>

)

}
