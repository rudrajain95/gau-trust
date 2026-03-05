"use client";

export default function Dashboard(){

  return(
    <div style={{padding:40,fontFamily:"Arial"}}>

      <h1>Gau Trust Admin Dashboard</h1>

      <hr/>

      <h3>Milk Business Panel</h3>

      <p>Purchase Price: ₹50 / Litre</p>
      <p>Selling Price: ₹60 / Litre</p>
      <p>Profit: ₹10 / Litre</p>

      <br/>

      <button style={{
        padding:10,
        background:"green",
        color:"white",
        border:"none"
      }}>
        Add Milk Product
      </button>

      <br/><br/>

      <button style={{
        padding:10,
        background:"orange",
        color:"white",
        border:"none"
      }}>
        View Orders
      </button>

    </div>
  )

}
