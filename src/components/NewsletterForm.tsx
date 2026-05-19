"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  if (subscribed) {
    return <div style={{ color: 'white', padding: '10px 20px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px' }}>Thank you for subscribing!</div>;
  }

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" required className={styles.newsletterInput} />
      <button type="submit" className="btn-primary" style={{ borderRadius: 0 }}>Subscribe</button>
    </form>
  );
}
