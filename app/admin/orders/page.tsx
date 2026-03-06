export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function OrdersPage() {

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      <h1>Customer Orders</h1>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: 20
      }}>

        <thead>
          <tr>
            <th style={{border:"1px solid #ddd",padding:8}}>Time</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Name</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Mobile</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Product</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Qty</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Payment</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Address</th>
            <th style={{border:"1px solid #ddd",padding:8}}>Call</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((o:any) => (

            <tr key={o.id}>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {new Date(o.createdAt).toLocaleString()}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.name}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.mobile}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.product}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.quantity}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.payment}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {o.address}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                <a href={`tel:${o.mobile}`}>
                  <button style={{
                    padding:"6px 10px",
                    background:"green",
                    color:"white",
                    border:"none"
                  }}>
                    Call
                  </button>
                </a>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
