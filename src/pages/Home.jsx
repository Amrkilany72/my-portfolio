import styles from './Home.module.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.titleBlock}>
        <span className={styles.intro}>HI, I'M</span>
        <motion.h1
          className={styles.nickname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          KILANY
        </motion.h1>
        <span className={styles.fullname}>Amr Kilany</span>
        <p className={styles.description}>
          A passionate Web Developer crafting modern, clean and functional
          websites.
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
