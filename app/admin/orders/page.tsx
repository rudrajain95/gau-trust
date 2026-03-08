export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export default async function OrdersPage() {

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" }
  });

  async function updateStatus(id: string, status: string) {
    "use server";

    await prisma.order.update({
      where: { id },
      data: { status }
    });

    revalidatePath("/admin/orders");
  }

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
            <th style={th}>Time</th>
            <th style={th}>Name</th>
            <th style={th}>Mobile</th>
            <th style={th}>Product</th>
            <th style={th}>Qty</th>
            <th style={th}>Payment</th>
            <th style={th}>Address</th>
            <th style={th}>Status</th>
            <th style={th}>Trial</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((o: any) => (

            <tr key={o.id}>

              <td style={td}>
                {new Date(o.createdAt).toLocaleString("en-IN",{timeZone:"Asia/Kolkata"})}
              </td>

              <td style={td}>{o.name}</td>

              <td style={td}>
                <a href={`tel:${o.mobile}`}>
                  {o.mobile}
                </a>
              </td>

              <td style={td}>{o.product}</td>

              <td style={td}>{o.quantity}</td>

              <td style={td}>{o.payment}</td>

              <td style={td}>{o.address}</td>

              <td style={td}>{o.status}</td>

              <td style={td}>
                {o.trialEnd ? `Days Left: ${
                  Math.ceil((new Date(o.trialEnd).getTime() - new Date().getTime()) / (1000*60*60*24))
                }` : "Trial User"}
              </td>

              <td style={td}>

                <a href={`tel:${o.mobile}`}>
                  <button style={callBtn}>Call</button>
                </a>

                <form action={updateStatus.bind(null, o.id, "Preparing")} style={{display:"inline",marginLeft:5}}>
                  <button style={preparingBtn}>Preparing</button>
                </form>

                <form action={updateStatus.bind(null, o.id, "Out for Delivery")} style={{display:"inline",marginLeft:5}}>
                  <button style={outBtn}>Out</button>
                </form>

                <form action={updateStatus.bind(null, o.id, "Delivered")} style={{display:"inline",marginLeft:5}}>
                  <button style={deliverBtn}>Delivered</button>
                </form>

                <form action={updateStatus.bind(null, o.id, "Cancelled")} style={{display:"inline",marginLeft:5}}>
                  <button style={cancelBtn}>Cancel</button>
                </form>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

const th = {
  border:"1px solid #ddd",
  padding:8,
  background:"#f5f5f5"
};

const td = {
  border:"1px solid #ddd",
  padding:8
};

const callBtn = {
  padding:"6px 10px",
  background:"#4CAF50",
  color:"white",
  border:"none"
};

const preparingBtn = {
  padding:"6px 10px",
  background:"#ff9800",
  color:"white",
  border:"none"
};

const outBtn = {
  padding:"6px 10px",
  background:"#2196f3",
  color:"white",
  border:"none"
};

const deliverBtn = {
  padding:"6px 10px",
  background:"#2e7d32",
  color:"white",
  border:"none"
};

const cancelBtn = {
  padding:"6px 10px",
  background:"#f44336",
  color:"white",
  border:"none"
};
