"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.column}>
          <h3>White Whale</h3>
          <p>
            Visit our restaurant to experience our relaxing atmosphere, to find a peace
            of mind and to enjoy our diverse, delicious, gourmet menu. Our extensive
            choice of side and main dishes and appetizers, as well as NA and alcoholic
            beverages are made to make your taste buds happy!
          </p>
        </div>
        
        <div className={styles.column}>
          <h3>Contact us</h3>
          <ul className={styles.contactList}>
            <li>📍 APR Complex, Nadaun, Hamirpur (H.P) 177301</li>
            <li>📱 8580910105</li>
            <li>🕒 Mon-Sun: 10:00 AM - 11:00 PM</li>
            <li>✉️ whitewhale033@gmail.com</li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Instagram</h3>
          <div className={styles.instagramGrid}>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/6.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/7.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/8.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/9.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/10.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className={styles.instagramItem} style={{backgroundImage: "url('/images/11.png')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        White Whale &copy; 2026 All Rights Reserved
      </div>
    </footer>
  );
}
