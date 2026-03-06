"use client";

import { useState } from "react";

export default function OrderPage() {

  const [name,setName] = useState("")
  const [mobile,setMobile] = useState("")
  const [address,setAddress] = useState("")
  const [product,setProduct] = useState("Milk")
  const [quantity,setQuantity] = useState("")
  const [payment,setPayment] = useState("Cash on Delivery")

  const submitOrder = async () => {

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
    })

    const data = await res.json()

    if(data.success){
      alert("Order placed successfully")
      setName("")
      setMobile("")
      setAddress("")
      setQuantity("")
    }else{
      alert("Order failed")
    }

  }

  return(

    <div style={{padding:30,fontFamily:"Arial",maxWidth:500}}>

      <h1>Customer Order</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:"100%"}}
      />

      <input
        placeholder="Mobile"
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
        <option>Curd</option>
        <option>Butter</option>
        <option>Ghee</option>
      </select>

      <input
        placeholder="Quantity (example: 2L / 500g)"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
        style={{display:"block",marginTop:10,padding:10,width:"100%"}}
      />

      <select
  value={payment}
  onChange={(e)=>setPayment(e.target.value)}
  style={{display:"block",marginTop:10,padding:10,width:"100%"}}
>
  <option>Cash on Delivery</option>
  <option>UPI Payment</option>
  <option>Online Payment</option>
</select>
      
      <button
        onClick={submitOrder}
        style={{
          marginTop:15,
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
