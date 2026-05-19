"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { processCheckout } from "./actions";
import styles from "./page.module.css";
import Link from "next/link";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const finalTotal = totalPrice * 1.1; // Including 10% taxes & fees

  if (items.length === 0 && !isProcessing) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Your cart is empty</h2>
        <Link href="/menu" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Return to Menu</Link>
      </div>
    );
  }

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // Simplistic card validation for demo
    const card = formData.get("cardNumber") as string;
    if (card.replace(/\s/g, '').length < 15) {
      setError("Invalid credit card number.");
      setIsProcessing(false);
      return;
    }

    const result = await processCheckout(
      formData, 
      items.map(i => ({ id: i.id, quantity: i.quantity, price: i.price })),
      finalTotal
    );

    if (result.error) {
      setError(result.error);
      setIsProcessing(false);
    } else if (result.orderId) {
      clearCart();
      router.push(`/thank-you/${result.orderId}`);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>Checkout</h1>
        </div>
      </section>

      <section className={styles.checkoutSection}>
        <div className={`container ${styles.checkoutContainer}`}>
          
          <div className={styles.formSection}>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleCheckout} id="checkout-form">
              <h2 className={styles.sectionTitle}>Delivery Details</h2>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" name="name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input type="tel" name="phone" required className={styles.input} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" name="email" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Delivery Address</label>
                <input type="text" name="address" required className={styles.input} placeholder="123 Ocean Ave, Apt 4" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Delivery Instructions (Optional)</label>
                <input type="text" name="notes" className={styles.input} placeholder="Leave at door, ring bell..." />
              </div>

              <h2 className={styles.sectionTitle} style={{ marginTop: '40px' }}>Payment Information</h2>
              <div className={styles.formGroup}>
                <label className={styles.label}>Cardholder Name</label>
                <input type="text" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Card Number</label>
                <input type="text" name="cardNumber" required className={styles.input} placeholder="**** **** **** ****" maxLength={19} />
              </div>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Expiry (MM/YY)</label>
                  <input type="text" required className={styles.input} placeholder="MM/YY" maxLength={5} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>CVV</label>
                  <input type="text" required className={styles.input} placeholder="123" maxLength={4} />
                </div>
              </div>
            </form>
          </div>

          <div className={styles.summarySection}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            <div style={{ marginBottom: '20px' }}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '15px' }}>
              <div className={styles.summaryItem} style={{ color: 'var(--text-dark)' }}>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem} style={{ color: 'var(--text-dark)' }}>
                <span>Taxes & Fees</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={isProcessing}
            >
              {isProcessing ? "PROCESSING PAYMENT..." : `PAY $${finalTotal.toFixed(2)}`}
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
