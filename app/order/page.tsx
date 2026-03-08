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
.then(data=>{

const images:any = {

Milk:"https://images.unsplash.com/photo-1563636619-e9143da7973b",
Paneer:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
Curd:"https://images.unsplash.com/photo-1585238342024-78d387f4a707",
Butter:"https://images.unsplash.com/photo-1603052875302-d376b7c0638c",
Ghee:"https://images.unsplash.com/photo-1615485737450-6f4dcd6c5c1d"

};

const newProducts = data.map((p:any)=>({

...p,
image: images[p.name] || ""

}));

setProducts(newProducts);

})

},[])

const deliveryCharge = selectedProduct?.name==="Milk"?0:20;

const totalPrice = selectedProduct
? (selectedProduct.price * quantity) + deliveryCharge
: 0;

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
quantity,
payment

})

})

const data = await res.json();

if(data.success){

alert("Order placed successfully");

if(data.whatsappUrl){
window.open(data.whatsappUrl,"_blank");
}

}else{

alert(data.message);

}

}

return(

<div style={{padding:30,fontFamily:"Arial",maxWidth:900}}>

<h1>Order Fresh Dairy Products</h1>

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
width:200,
borderRadius:12,
cursor:"pointer",
boxShadow:"0 2px 8px rgba(0,0,0,0.1)",
background:selectedProduct?.name===p.name?"#e3f2fd":"white"
}}
>

<img
src={p.image}
style={{
width:"100%",
height:120,
objectFit:"cover",
borderRadius:8
}}
/>

<h3 style={{marginTop:10}}>{p.name}</h3>

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
>
-
</button>

<span>{quantity}</span>

<button
onClick={()=>setQuantity(quantity+1)}
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
background:"#1976d2",
color:"white",
border:"none",
borderRadius:8,
width:"100%"
}}
>

Place Order

</button>

</div>

)

}
