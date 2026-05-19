import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const STATUS_STAGES = [
  { id: "RECEIVED", label: "Order Received" },
  { id: "PREPARING", label: "Preparing Food" },
  { id: "OUT_FOR_DELIVERY", label: "Out for Delivery" },
  { id: "DELIVERED", label: "Delivered" },
];

export default async function TrackOrder({ params }: { params: Promise<{ orderId: string }> }) {
  const resolvedParams = await params;
  
  const order = await prisma.order.findUnique({
    where: { id: resolvedParams.orderId }
  });

  if (!order) {
    notFound();
  }

  const currentStageIndex = STATUS_STAGES.findIndex(s => s.id === order.status);

  return (
    <div className={styles.container}>
      <div className={styles.trackingCard}>
        <h1 className={styles.title}>Track Your Order</h1>
        <p style={{ opacity: 0.8, marginBottom: '20px' }}>Order ID: {order.id}</p>

        <div className={styles.timeline}>
          {STATUS_STAGES.map((stage, index) => {
            const isCompleted = index < currentStageIndex;
            const isActive = index === currentStageIndex;
            
            let statusClass = "";
            if (isActive) statusClass = styles.active;
            if (isCompleted) statusClass = styles.completed;

            return (
              <div key={stage.id} className={`${styles.step} ${statusClass}`}>
                <div className={styles.circle}>
                  {isCompleted ? "✓" : (index + 1)}
                </div>
                <div className={styles.stepLabel}>{stage.label}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.infoBox}>
          <h3 style={{ marginBottom: '10px' }}>Delivery Details</h3>
          <p><strong>To:</strong> {order.customerName}</p>
          <p><strong>Address:</strong> {order.deliveryAddress}</p>
          {order.deliveryNotes && <p><strong>Notes:</strong> {order.deliveryNotes}</p>}
        </div>

        <p className={styles.refreshText}>Refresh this page to see updates to your order status.</p>

        <div style={{ marginTop: '30px' }}>
          <Link href="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
