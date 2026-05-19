"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { submitContact } from "./actions";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    setStatus("loading");
    const result = await submitContact(formData);
    
    if (result.error) {
      setErrorMessage(result.error);
      setStatus("error");
    } else {
      setStatus("success");
      // Optional: clear form
    }
  };

  return (
    <>
      <div className={styles.mapContainer}>
        <iframe 
          src="https://maps.google.com/maps?q=APR%20Complex,%20Nadaun,%20Hamirpur%20(H.P)%20177301&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <section className="container">
        <div className={styles.contactSection}>
          <div>
            <h1 className={styles.title}>Contact us</h1>
            <div className={styles.contactInfo}>
              <p>📍 <strong>Address:</strong> APR Complex, Nadaun, Hamirpur (H.P) 177301</p>
              <p>📱 <strong>Phone:</strong> 8580910105</p>
              <p>✉️ <strong>E-mail:</strong> whitewhale033@gmail.com</p>
              <p>🕒 <strong>Hours:</strong> Mon-Sun: 10:00 AM - 11:00 PM</p>
            </div>
            <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
              If you have any questions, comments or requests, please feel free to contact us using the form. We'll get back to you shortly!
            </p>
          </div>

          <div>
            <h2 className={styles.title} style={{ fontSize: "2rem" }}>Get in Touch</h2>
            
            {status === "success" && (
              <div className={styles.messageSuccess}>
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            )}
            
            {status === "error" && (
              <div className={styles.messageError}>
                {errorMessage}
              </div>
            )}

            <form action={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="email" placeholder="Your E-mail" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <input type="tel" name="phone" placeholder="Your Phone" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <textarea name="message" placeholder="Message" required className={styles.textarea}></textarea>
              </div>
              <button type="submit" className="btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
