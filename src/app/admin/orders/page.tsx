import prisma from "@/lib/prisma";
import { updateOrderStatus } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminOrders() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: { items: { include: { menuItem: true } } }
  });

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Manage Orders</h1>
      
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map(order => (
            <div key={order.id} style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <div>
                  <strong>Order ID:</strong> {order.id}<br/>
                  <strong>Customer:</strong> {order.customerName} ({order.customerPhone})<br/>
                  <strong>Address:</strong> {order.deliveryAddress}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <strong>Total:</strong> ${order.totalAmount.toFixed(2)}<br/>
                  <strong>Time:</strong> {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong>Items:</strong>
                <ul style={{ listStyle: 'inside', margin: '5px 0' }}>
                  {order.items.map(item => (
                    <li key={item.id}>{item.quantity}x {item.menuItem.name}</li>
                  ))}
                </ul>
                {order.deliveryNotes && <p><strong>Notes:</strong> {order.deliveryNotes}</p>}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <strong>Status:</strong>
                <form action={async (formData) => {
                  "use server";
                  await updateOrderStatus(order.id, formData.get("status") as string);
                }} style={{ display: 'flex', gap: '10px' }}>
                  <select name="status" defaultValue={order.status} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                    <option value="RECEIVED">Received</option>
                    <option value="PREPARING">Preparing</option>
                    <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                    <option value="DELIVERED">Delivered</option>
                  </select>
                  <button type="submit" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Update</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
