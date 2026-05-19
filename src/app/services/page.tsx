import styles from "./page.module.css";

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>Services</h1>
          <div className={styles.subtitle}>Tailored culinary experience</div>
          
          <p className={styles.text}>
            Besides offering a regular conventional set of culinary services, the White Whale restaurant also offers a set of additional services...
          </p>
          <p className={styles.text}>
            Starting with business and weddings catering and finishing with waiter rentals and tailoring and delivering a diet menu for you...
          </p>
          <p className={styles.text}>
            We will keep you well-wed and in a great mood, no matter what!
          </p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={`container ${styles.servicesGrid}`}>
          <div>
            <div className={styles.serviceIcon}>🔔</div>
            <h3 className={styles.serviceTitle}>Weddings & Parties catering</h3>
            <p className={styles.serviceDesc}>
              We cater any types of events. Starting with weddings, baby showers, bachelor parties, birthdays and finishing with anniversaries.
            </p>
          </div>
          <div>
            <div className={styles.serviceIcon}>👔</div>
            <h3 className={styles.serviceTitle}>Waiter rental</h3>
            <p className={styles.serviceDesc}>
              If you want to rent out one of our seasoned and skillful waiters for your event or a gala dinner, we'll be more than glad to do that!
            </p>
          </div>
          <div>
            <div className={styles.serviceIcon}>💼</div>
            <h3 className={styles.serviceTitle}>Business catering</h3>
            <p className={styles.serviceDesc}>
              Our restaurant offers a business catering service that will keep even the most demanding companies well-fed, well serviced and fully satisfied!
            </p>
          </div>
          <div>
            <div className={styles.serviceIcon}>🚚</div>
            <h3 className={styles.serviceTitle}>Personal menu delivery</h3>
            <p className={styles.serviceDesc}>
              If you're looking for a balanced, well selected menu, our tailored personal catering service will deliver it to you in no time! All of our Japanese menu items can be delivered that way!
            </p>
          </div>
          <div>
            <div className={styles.serviceIcon}>⏱️</div>
            <h3 className={styles.serviceTitle}>Party consulting</h3>
            <p className={styles.serviceDesc}>
              As food events professionals, we'll be more than glad to share one of our managers to advise you on party's menu, selection of beverages and the interior for any type of occasion...
            </p>
          </div>
          <div>
            <div className={styles.serviceIcon}>🏳️</div>
            <h3 className={styles.serviceTitle}>Diet menu</h3>
            <p className={styles.serviceDesc}>
              We know how hard it is to follow a diet on your own. We will customize its menu for any specific type of diet you're on! We'll even deliver it to your doorstep 3 times a day!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
