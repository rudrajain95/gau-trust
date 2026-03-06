export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ProductsPage() {

  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div style={{padding:20,fontFamily:"Arial"}}>
      <h1>Gau Trust Milk - Products</h1>

      <table style={{
        width:"100%",
        borderCollapse:"collapse",
        marginTop:20
      }}>
        <thead>
          <tr>
            {["Product","Price","Unit","Status"].map((h)=>(
              <th key={h} style={{
                border:"1px solid #ddd",
                padding:10,
                background:"#f5f5f5"
              }}>{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {products.map((p)=>(
            <tr key={p.id}>
              <td style={{border:"1px solid #ddd",padding:8}}>
                {p.name}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                ₹{p.price}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {p.unit}
              </td>

              <td style={{border:"1px solid #ddd",padding:8}}>
                {p.active ? "Active" : "Hidden"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
