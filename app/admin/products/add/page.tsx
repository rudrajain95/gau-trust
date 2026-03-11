"use client";

import { useState, useEffect } from "react";

export default function AddProductPage(){

const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [unit,setUnit] = useState("");

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
}

},[]);

const addProduct = async ()=>{

if(!name || !price || !unit){
alert("Fill all fields");
return;
}

const res = await fetch("/api/products/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
price,
unit
})
});

const data = await res.json();

if(data.success){

alert("Product added");

window.location.href="/admin/products";

}else{

alert(data.message);

}

};

return(

<div style={{padding:40,fontFamily:"Arial"}}>

<h1>Add Product</h1>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={input}
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
style={input}
/>

<input
placeholder="Unit (Litre / Kg / Packet)"
value={unit}
onChange={(e)=>setUnit(e.target.value)}
style={input}
/>

<button
onClick={addProduct}
style={btn}
>
Add Product
</button>

</div>

)

}

const input={
display:"block",
marginTop:10,
padding:10,
width:300
}

const btn={
marginTop:15,
padding:10,
background:"green",
color:"white",
border:"none"
}
