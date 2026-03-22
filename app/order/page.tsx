"use client";

import { useEffect, useState } from "react";

export default function OrderPage(){

const [products,setProducts]=useState<any[]>([]);
const [shops,setShops]=useState<any[]>([]);
const [cart,setCart]=useState<any[]>([]);

const [selectedShop,setSelectedShop]=useState<any>(null);

const [name,setName]=useState("");
const [mobile,setMobile]=useState("");
const [address,setAddress]=useState("");

useEffect(()=>{

fetch("/api/products/list")
.then(res=>res.json())
.then(data=>setProducts(data))

fetch("/api/shops/list")
.then(res=>res.json())
.then(data=>setShops(data))

},[])

const addToCart=(product:any)=>{

const existing=cart.find(c=>c.id===product.id)

if(existing){

setCart(cart.map(c=>
c.id===product.id
? {...c,quantity:c.quantity+1}
: c
))

}else{

setCart([...cart,{
...product,
quantity:1
}])

}

}

const removeFromCart=(id:string)=>{

setCart(cart.filter(c=>c.id!==id))

}

const placeOrder=async()=>{

if(!selectedShop){
alert("Select shop first")
return
}

if(cart.length===0){
alert("Cart empty")
return
}

const res=await fetch("/api/order-cart",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
mobile,
address,
shopId:selectedShop.id,
items:cart

})

})

const data=await res.json()

if(data.success){

alert("Order placed")

setCart([])

}

}

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Order Dairy Products</h1>

<h2>Select Shop</h2>

<div style={{display:"flex",gap:20}}>

{shops.map((s)=>(
<div
key={s.id}
onClick={()=>setSelectedShop(s)}
style={{
border:"1px solid #ddd",
padding:20,
cursor:"pointer",
background:selectedShop?.id===s.id?"#e3f2fd":"white"
}}
>
<h3>{s.name}</h3>
<p>{s.address}</p>
<p>{s.mobile}</p>
</div>
))}

</div>

<h2 style={{marginTop:40}}>Products</h2>

<div style={{display:"flex",gap:20,flexWrap:"wrap"}}>

{products.map((p)=>(
<div
key={p.id}
style={{
border:"1px solid #ddd",
padding:20,
width:180
}}
>

<h3>{p.name}</h3>
<p>₹{p.price}</p>

<button
onClick={()=>addToCart(p)}
>
Add
</button>

</div>
))}

</div>

<h2 style={{marginTop:40}}>Cart</h2>

{cart.map((c)=>(
<div key={c.id}>

{c.name} × {c.quantity}

<button onClick={()=>removeFromCart(c.id)}>
Remove
</button>

</div>
))}

<button
onClick={placeOrder}
style={{
marginTop:30,
padding:12,
background:"green",
color:"white",
border:"none"
}}
>

Place Order

</button>

</div>

)

}
