import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.welcome}>Welcome to the</div>
          <h1 className={styles.title}>White Whale</h1>
          <p className={styles.subtitle}>
            The ultimate seafood experience in Washington, DC.<br/>
            Order online or call 8580910105
          </p>
          <Link href="/menu" className="btn-primary">Order Online</Link>
        </div>
      </section>

      <section className={styles.awards}>
        <div className={`container ${styles.awardsContainer}`}>
          <div className={styles.awardItem}>
            <div className={styles.awardIcon}>Win</div>
            <div>
              <strong>Open Table Dinners</strong><br/>2026
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardIcon}>Yelp</div>
            <div>
              <strong>People love us on Yelp</strong><br/>2026
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardIcon}>Mich</div>
            <div>
              <strong>Guide Michelin</strong><br/>2026
            </div>
          </div>
          <div className={styles.awardItem}>
            <div className={styles.awardIcon}>Trip</div>
            <div>
              <strong>Travelers Choice</strong><br/>2026
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesGrid}>
        <Link href="/menu#STARTERS" className={styles.categoryItem} style={{backgroundImage: "url('/images/2.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
          <h2 className={styles.categoryTitle}>Starters</h2>
        </Link>
        <Link href="/menu#MAIN COURSES" className={styles.categoryItem} style={{backgroundImage: "url('/images/3.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
          <h2 className={styles.categoryTitle}>Main Courses</h2>
        </Link>
        <Link href="/menu#DESSERTS" className={styles.categoryItem} style={{backgroundImage: "url('/images/4.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
          <h2 className={styles.categoryTitle}>Desserts</h2>
        </Link>
        <Link href="/menu#DRINKS" className={styles.categoryItem} style={{backgroundImage: "url('/images/5.png')", backgroundPosition: "center", backgroundSize: "cover"}}>
          <h2 className={styles.categoryTitle}>Drinks</h2>
        </Link>
      </section>

      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <h2>What people are saying about our restaurant</h2>
          <p className={styles.sectionSubtitle}>Anyone who visits our place leaves us well fed and in a great mood!</p>
          
          <div className={styles.testimonialsGrid}>
            <div>
              <div className={styles.quote}>&ldquo;</div>
              <p>Tasting the awesome oysters here is a truly meditative experience! I try to come on in here for as often as possible, taking all my family and friends in for a tasty seafood treat!</p>
              <div className={styles.author}>
                <img src="/images/14.png" alt="Sam" className={styles.authorImg} />
                <div>
                  <strong>Sam</strong><br/>
                  <small>posted on, TripAdvisor</small>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.quote}>&ldquo;</div>
              <p>Seeing how the guys deliver the freshest fish and miscellaneous seafood at the place I'm always confident that my dinner will be amazing! With that in mind, I'm their regular customer!</p>
              <div className={styles.author}>
                <img src="/images/15.png" alt="Leah" className={styles.authorImg} />
                <div>
                  <strong>Leah</strong><br/>
                  <small>posted on, foursquare</small>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.quote}>&ldquo;</div>
              <p>Whenever I feel like I'd fancy some crab meat or some fresh oysters, there's just no other place on Earth that I can think of for having such a treat at - but this incredible White Whale seafood restaurant!</p>
              <div className={styles.author}>
                <img src="/images/16.png" alt="Alfred" className={styles.authorImg} />
                <div>
                  <strong>Alfred</strong><br/>
                  <small>posted on, Yelp</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chefRecommends}>
        <div className="container" style={{marginBottom: "40px"}}>
          <h2>Chef Recommends</h2>
          <p className={styles.sectionSubtitle}>Choose a perfect combination of main dish and wine, thanks to our Chef's specials</p>
        </div>
        
        <div className={styles.menuGrid}>
          <div className={styles.menuItemCard}>
            <img src="/images/6.png" alt="Dish" className={styles.menuItemImg} />
            <div className={styles.menuItemContent}>
              <div className={styles.menuItemHeader}>
                <strong>ROMAN OSTERS</strong>
                <span className={styles.menuItemPrice}>$14.49</span>
              </div>
              <p className={styles.menuItemDesc}>200g of Black Angus steak, french fries, Coleslaw salad</p>
            </div>
          </div>
          <div className={styles.menuItemCard}>
            <img src="/images/7.png" alt="Dish" className={styles.menuItemImg} />
            <div className={styles.menuItemContent}>
              <div className={styles.menuItemHeader}>
                <strong>ITALIAN FENNEL</strong>
                <span className={styles.menuItemPrice}>$14.49</span>
              </div>
              <p className={styles.menuItemDesc}>with English watercress & hazelnuts</p>
            </div>
          </div>
          <div className={styles.menuItemCard}>
            <img src="/images/8.png" alt="Dish" className={styles.menuItemImg} />
            <div className={styles.menuItemContent}>
              <div className={styles.menuItemHeader}>
                <strong>ZUCCHINI PANCAKES</strong>
                <span className={styles.menuItemPrice}>$23.45</span>
              </div>
              <p className={styles.menuItemDesc}>with goat cheese</p>
            </div>
          </div>
          <div className={styles.menuItemCard}>
            <img src="/images/9.png" alt="Dish" className={styles.menuItemImg} />
            <div className={styles.menuItemContent}>
              <div className={styles.menuItemHeader}>
                <strong>BACON & BLUE CHEESE BURGER</strong>
                <span className={styles.menuItemPrice}>$18.45</span>
              </div>
              <p className={styles.menuItemDesc}>with Winter black truffles from Piedmont</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gourmet}>
        <div className={styles.gourmetContent}>
          <div className={styles.welcome}>Looking for a gourmet experience?</div>
          <h2 style={{fontSize: "2.5rem", marginBottom: "20px"}}>We have it all here!</h2>
          <p style={{lineHeight: 1.6, opacity: 0.9}}>
            White Whale treasures the atmosphere just as much as the dining menu. We assembled a strong team of professionals, all of whom aspire to constantly excel and step it up!
          </p>
        </div>
        <div className={styles.gourmetImage}></div>
      </section>

      <section className={styles.atmosphere}>
        <div className={`container ${styles.atmosphereContent}`}>
          <div className={styles.welcome}>Do you value relaxing, friendly atmosphere?</div>
          <h2 style={{fontSize: "2.5rem", marginBottom: "30px"}}>Our interior will sway your mood!</h2>
          <p style={{lineHeight: 1.6, opacity: 0.9, marginBottom: "30px"}}>
            Our interior reminds every guest a deep blue sea! The White Whale restaurant offers a cozy, home-like atmosphere to help you enjoy your dinner and relax in the midst of our navy-blue themed setting.
          </p>
          <Link href="/gallery" className="btn-primary" style={{backgroundColor: "transparent", border: "2px solid white"}}>Gallery</Link>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={`container ${styles.newsletterContainer}`}>
          <div>
            <h2 style={{marginBottom: "10px"}}>Do You Like Tasty Food?</h2>
            <p style={{opacity: 0.9}}>Stay updated with the latest new dishes on our menu, special offers and Restaurant's events!</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
