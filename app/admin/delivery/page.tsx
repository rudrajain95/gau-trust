export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DeliveryPage(){

  const orders = await prisma.order.findMany({
    orderBy:{createdAt:"desc"}
  })

  const today = new Date().toDateString()

  const todayOrders = orders.filter(o =>
    new Date(o.createdAt).toDateString() === today
  )

  const pending = todayOrders.filter(o => o.status !== "Delivered")

  const delivered = todayOrders.filter(o => o.status === "Delivered")

  return(

    <div style={{padding:20,fontFamily:"Arial"}}>

      <h1>Delivery Dashboard</h1>

      <h2>Today's Orders: {todayOrders.length}</h2>

      <h3>Pending Deliveries: {pending.length}</h3>

      <h3>Delivered: {delivered.length}</h3>

      <table style={{
        width:"100%",
        borderCollapse:"collapse",
        marginTop:20
      }}>

        <thead>

          <tr>

            <th style={th}>Name</th>
            <th style={th}>Product</th>
            <th style={th}>Qty</th>
            <th style={th}>Address</th>
            <th style={th}>Status</th>
            <th style={th}>Call</th>

          </tr>

        </thead>

        <tbody>

          {todayOrders.map((o:any)=>(
            <tr key={o.id}>

              <td style={td}>{o.name}</td>

              <td style={td}>{o.product}</td>

              <td style={td}>{o.quantity}</td>

              <td style={td}>{o.address}</td>

              <td style={td}>{o.status}</td>

              <td style={td}>
                <a href={`tel:${o.mobile}`}>
                  <button style={callBtn}>Call</button>
                </a>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

const th = {
  border:"1px solid #ddd",
  padding:8,
  background:"#f5f5f5"
}

const td = {
  border:"1px solid #ddd",
  padding:8
}

const callBtn = {
  padding:"6px 10px",
  background:"green",
  color:"white",
  border:"none"
}
