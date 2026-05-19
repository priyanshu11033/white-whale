import styles from "./page.module.css";

export default function Gallery() {
  const images = [
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png"
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>Our Gallery</h1>
          <p style={{fontFamily: 'var(--font-cursive)', color: 'var(--accent)', fontSize: '2rem'}}>
            A glimpse into our atmosphere
          </p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={`container ${styles.galleryGrid}`}>
          {images.map((src, idx) => (
            <div key={idx} className={styles.galleryItem}>
              <img src={src} alt={`Gallery image ${idx + 1}`} className={styles.galleryImg} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
