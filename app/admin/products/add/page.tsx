"use client"

import { useState } from "react"

export default function AddProduct(){

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [unit,setUnit] = useState("")

const addProduct = async () => {

await fetch("/api/products",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
price:parseFloat(price),
unit
})
})

alert("Product Added")

window.location.href="/admin/products"

}

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Add Product</h1>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:300}}
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:300}}
/>

<input
placeholder="Unit (Litre / Kg / gm)"
value={unit}
onChange={(e)=>setUnit(e.target.value)}
style={{display:"block",marginTop:10,padding:10,width:300}}
/>

<button
onClick={addProduct}
style={{
marginTop:20,
padding:10,
background:"green",
color:"white",
border:"none"
}}
>
Save Product
</button>

</div>

)

}
