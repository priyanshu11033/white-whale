import styles from "./page.module.css";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function About() {
  return (
    <>
      <div className={styles.hero}></div>

      <section className={styles.content}>
        <div className="container">
          <h1 className={styles.title}>Celebrating the Seafood</h1>
          <p className={styles.text}>
            We're confident that when it comes to lunching or dining, every bite you take should be pleasing. The White Whale restaurant was developed to bring you organically and eco-friendly sourced food, cooked on site, that is tasty and healthy for you. When our founder Mary Potocky studied the food landscape at the time, she quickly realized there was an opportunity to share a love for fresh fish in an accessible format, quickly and affordably. She put her pen to paper, got some friends and family together, and after many late nights debating the right font, the perfect blue or the most effective ice machine, the White Whale opened its doors in the May of 2026.
          </p>
        </div>
      </section>

      <section className={styles.lifestyle}>
        <div className="container">
          <h2 className={styles.lifestyleTitle}>Food as a Lifestyle</h2>
          <p className={styles.quote}>
            Its simple. Our mission is to make anyone's day better! We want you to feel great about the food choices you make here and feel better when you leave than when you arrived. We well might achieve this because your belly is happy and you'll be comfortable when you arrive back at your desk!
          </p>
          <img src="/images/27.png" alt="Chef" style={{width: '100%', maxWidth: '1000px', height: '500px', objectFit: 'cover'}} />
        </div>
      </section>

      <section className={styles.team} id="team">
        <div className="container">
          <h2 className={styles.lifestyleTitle}>Meet our Team</h2>
          <p className={styles.text}>
            White Whale is a family owned restaurant, which treasures the atmosphere just as much as the dining menu. We assembled a strong team of professionals, all of whom aspire to constantly excel and step up!
          </p>
        </div>
      </section>

      <section className={styles.zagat}>
        <div className={styles.zagatImg}></div>
        <div className={styles.zagatContent}>
          <h2 className={styles.title} style={{textAlign: 'left', fontSize: '2rem'}}>We're in Zagat's Top<br/>10 of the US Seafood!</h2>
          <p className={styles.text} style={{textAlign: 'left', marginBottom: 0}}>
            Adding to our excitement of the 10th anniversary coming closer by day, the last week had some awesome news too! The famous Zagat magazine, that yearly compiles lists of the best restaurants in different categories has just included the White Whale in its US-wide top-10 of the best Seafood & Fish places!
          </p>
        </div>
      </section>

      <section className={styles.hiring}>
        <div className="container">
          <h2 className={styles.lifestyleTitle} style={{fontSize: '3rem', fontWeight: 300}}>We're hiring new culinary talents all the time!</h2>
          <p className={styles.text} style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px'}}>
            If you want to become a part of our culinary family and you have at least 6 months of prior experience of working at a restaurant, han contact us today!
          </p>
          <Link href="/contact" className="btn-primary" style={{display: 'inline-block', textDecoration: 'none'}}>CAREERS</Link>
        </div>
      </section>

      <div className={styles.cta}>
        View <Link href="/menu" className={styles.ctaLink}>The Menus</Link> and <Link href="/contact" className={styles.ctaLink}>Make A Reservation</Link>
      </div>
    </>
  );
}
