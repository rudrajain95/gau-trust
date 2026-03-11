"use client";

import { useEffect,useState } from "react";

export default function ProductsPage(){

const [products,setProducts] = useState<any[]>([]);

useEffect(()=>{
loadProducts();
},[]);

const loadProducts = async ()=>{

const res = await fetch("/api/products/list");

const data = await res.json();

setProducts(data);

};

return(

<div style={{padding:30,fontFamily:"Arial"}}>

<h1>Milk & Dairy Products</h1>

<div style={{
display:"flex",
gap:20,
flexWrap:"wrap",
marginTop:30
}}>

{products.map((p:any)=>(

<div key={p.id}
style={{
border:"1px solid #ddd",
padding:20,
borderRadius:10,
width:200
}}>

<h3>{p.name}</h3>

<p>₹{p.price}</p>

<p>{p.unit}</p>

</div>

))}

</div>

</div>

)

}
