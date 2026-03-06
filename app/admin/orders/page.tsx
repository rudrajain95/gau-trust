export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Gau Trust Milk - Orders</h1>
      <p>Total Orders: {orders.length}</p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: 20,
        }}
      >
        <thead>
          <tr>
            {["Time", "Name", "Mobile", "Address", "Product", "Quantity", "Status"].map((h) => (
              <th
                key={h}
                style={{
                  border: "1px solid #ddd",
                  padding: 8,
                  textAlign: "left",
                  background: "#f5f5f5",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>
                {new Date(o.createdAt).toLocaleString()}
              </td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.name}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.mobile}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.address}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.product}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.quantity}</td>
              <td style={{ border: "1px solid #ddd", padding: 8 }}>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
