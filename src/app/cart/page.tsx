"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const router = useRouter();

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>Your Cart</h1>
        </div>
      </section>

      <section className={styles.cartSection}>
        <div className={`container ${styles.cartContainer}`}>
          {items.length === 0 ? (
            <div className={styles.emptyState}>
              <p style={{ marginBottom: '20px' }}>Your cart is currently empty.</p>
              <Link href="/menu" className="btn-primary">Browse Menu</Link>
            </div>
          ) : (
            <>
              <table className={styles.cartTable}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td data-label="Product">
                        <div className={styles.itemInfo}>
                          {item.imageUrl && <img src={item.imageUrl} alt={item.name} className={styles.itemImg} />}
                          <span className={styles.itemName}>{item.name}</span>
                        </div>
                      </td>
                      <td data-label="Price">${item.price.toFixed(2)}</td>
                      <td data-label="Quantity">
                        <div className={styles.quantityControl}>
                          <button className={styles.quantityBtn} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span className={styles.quantityText}>{item.quantity}</span>
                          <button className={styles.quantityBtn} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td data-label="Subtotal">${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className={styles.cartSummary}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Taxes & Fees (10%)</span>
                  <span>${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
                  <span>Total</span>
                  <span>${(totalPrice * 1.1).toFixed(2)}</span>
                </div>

                <button 
                  className={`btn-primary ${styles.checkoutBtn}`} 
                  onClick={() => router.push('/checkout')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
