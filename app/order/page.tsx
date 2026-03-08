"use client";

import { useEffect, useState } from "react";

export default function OrderPage() {

const [products,setProducts] = useState<any[]>([]);
const [name,setName] = useState("");
const [mobile,setMobile] = useState("");
const [address,setAddress] = useState("");
const [selectedProduct,setSelectedProduct] = useState<any>(null);
const [quantity,setQuantity] = useState(1);
const [payment,setPayment] = useState("Cash on Delivery");

useEffect(()=>{

fetch("/api/products")
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

const deliveryCharge = selectedProduct?.name === "Milk" ? 0 : 20;

const totalPrice =
selectedProduct ? (selectedProduct.price * quantity) + deliveryCharge : 0;

const placeOrder = async ()=>{

if(!name || !mobile || !address || !selectedProduct){

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
product:selectedProduct.name,
quantity:quantity,
payment

})

})

const data = await res.json();

if(data.success){

alert("Order placed successfully");

if(data.whatsappUrl){

window.open(data.whatsappUrl,"_blank");

}

setName("");
setMobile("");
setAddress("");
setSelectedProduct(null);
setQuantity(1);

}else{

alert(data.message);

}

}

return(

<div style={{padding:30,fontFamily:"Arial",maxWidth:800}}>

<h1>Order Products</h1>

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
flexWrap:"wrap",
gap:20,
marginTop:20
}}>

{products.map((p)=>(
<div
key={p.id}
onClick={()=>setSelectedProduct(p)}
style={{
border:"1px solid #ddd",
padding:20,
width:160,
borderRadius:10,
cursor:"pointer",
boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
background:selectedProduct?.name===p.name?"#e3f2fd":"white"
}}
>

<h3>{p.name}</h3>

<p>₹{p.price}</p>

</div>
))}

</div>

{selectedProduct && (

<div style={{marginTop:30}}>

<h3>Quantity</h3>

<div style={{display:"flex",alignItems:"center",gap:10}}>

<button
onClick={()=>quantity>1 && setQuantity(quantity-1)}
style={{padding:"6px 12px"}}
>
-
</button>

<span>{quantity}</span>

<button
onClick={()=>setQuantity(quantity+1)}
style={{padding:"6px 12px"}}
>
+
</button>

</div>

</div>

)}

<select
value={payment}
onChange={(e)=>setPayment(e.target.value)}
style={{display:"block",marginTop:20,padding:12,width:"100%"}}
>

<option>Cash on Delivery</option>

<option>UPI Payment</option>

<option>Online Payment</option>

</select>

{selectedProduct && (

<div style={{marginTop:20}}>

<p>Product Price: ₹{selectedProduct.price * quantity}</p>

<p>Delivery Charge: ₹{deliveryCharge}</p>

<h3>Total: ₹{totalPrice}</h3>

</div>

)}

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
