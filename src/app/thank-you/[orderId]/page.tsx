import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default async function ThankYou({ params }: { params: Promise<{ orderId: string }> }) {
  const resolvedParams = await params;
  
  const order = await prisma.order.findUnique({
    where: { id: resolvedParams.orderId },
    include: { items: { include: { menuItem: true } } }
  });

  if (!order) {
    notFound();
  }

  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxAndFees = subtotal * 0.1;

  return (
    <div className={styles.container}>
      <div className={styles.invoiceCard}>
        <div className={styles.header}>
          <div style={{ fontSize: '4rem', marginBottom: '10px' }}>✅</div>
          <h1 className={styles.title}>Thank You!</h1>
          <p>Your order has been received and is being prepared.</p>
          <div className={styles.orderId}>Order ID: {order.id}</div>
        </div>

        <div className={styles.detailsGrid}>
          <div>
            <div className={styles.detailLabel}>Customer Name</div>
            <div className={styles.detailValue}>{order.customerName}</div>
          </div>
          <div>
            <div className={styles.detailLabel}>Date</div>
            <div className={styles.detailValue}>{new Date(order.createdAt).toLocaleDateString()}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div className={styles.detailLabel}>Delivery Address</div>
            <div className={styles.detailValue}>{order.deliveryAddress}</div>
          </div>
        </div>

        <div className={styles.itemsList}>
          <h3 style={{ marginBottom: '15px' }}>Order Summary</h3>
          {order.items.map(item => (
            <div key={item.id} className={styles.itemRow}>
              <span>{item.quantity}x {item.menuItem.name}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className={styles.totals}>
          <div className={styles.totalRow}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.totalRow}>
            <span>Taxes & Fees</span>
            <span>${taxAndFees.toFixed(2)}</span>
          </div>
          <div className={`${styles.totalRow} ${styles.grandTotal}`}>
            <span>Total Paid</span>
            <span>${order.totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={`/track/${order.id}`} className={`btn-primary ${styles.trackBtn}`}>Track Delivery</Link>
          <Link href="/" className={`btn-primary ${styles.homeBtn}`}>Return Home</Link>
        </div>
      </div>
    </div>
  );
}
