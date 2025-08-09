import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.fadeInUp}`}>
          Hi, I’m <span className={styles.accent}>Amr</span>
        </h1>
        <p
          className={`${styles.subtitle} ${styles.fadeInUp}`}
          style={{ animationDelay: '0.3s' }}
        >
          A passionate <span className={styles.accent}>Web Developer</span>{' '}
          crafting modern, clean and functional websites.
        </p>
        <a
          href="#projects"
          className={`${styles.cta} ${styles.fadeInUp}`}
          style={{ animationDelay: '0.6s' }}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
