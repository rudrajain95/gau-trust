"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {

const [products, setProducts] = useState<any[]>([]);

useEffect(()=>{

const admin = localStorage.getItem("adminLogin");

if(!admin){
window.location.href="/admin/login";
return;
}

loadProducts();

},[]);

const loadProducts = async () => {
const res = await fetch("/api/products");
const data = await res.json();
setProducts(data);
};

const updateProduct = async (product: any) => {

const name = prompt("Product Name", product.name);
const price = prompt("Price", product.price);
const unit = prompt("Unit", product.unit);
const activeText = prompt("Active? yes / no", product.active ? "yes" : "no");

if (!name || !price || !unit || !activeText) return;

await fetch("/api/products/update",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
id:product.id,
name,
price,
unit,
active: activeText.toLowerCase()==="yes"
})
});

alert("Product updated");

loadProducts();

};

const deleteProduct = async (id:string)=>{

const ok = confirm("Delete this product?");
if(!ok) return;

await fetch("/api/products/delete",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({id})
});

alert("Product deleted");

loadProducts();

};

return(

<div style={{padding:20,fontFamily:"Arial"}}>

<h1>Gau Trust Milk - Products</h1>

<a href="/admin/products/add">
<button style={{
marginTop:20,
padding:10,
background:"green",
color:"white",
border:"none"
}}>
Add Product
</button>
</a>

<table style={{
width:"100%",
borderCollapse:"collapse",
marginTop:20
}}>

<thead>
<tr>
<th style={th}>Product</th>
<th style={th}>Price</th>
<th style={th}>Unit</th>
<th style={th}>Status</th>
<th style={th}>Action</th>
</tr>
</thead>

<tbody>

{products.map((p)=>(

<tr key={p.id}>

<td style={td}>{p.name}</td>

<td style={td}>₹{p.price}</td>

<td style={td}>{p.unit}</td>

<td style={td}>{p.active?"Active":"Hidden"}</td>

<td style={td}>

<button onClick={()=>updateProduct(p)} style={editBtn}>
Edit
</button>

<button
onClick={()=>deleteProduct(p.id)}
style={{...deleteBtn,marginLeft:8}}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

const th={
border:"1px solid #ddd",
padding:10,
background:"#f5f5f5"
}

const td={
border:"1px solid #ddd",
padding:8
}

const editBtn={
padding:"6px 10px",
background:"blue",
color:"white",
border:"none",
cursor:"pointer"
}

const deleteBtn={
padding:"6px 10px",
background:"red",
color:"white",
border:"none",
cursor:"pointer"
}
