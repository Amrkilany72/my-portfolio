import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.left}>
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
    <div className={styles.center}>
      <a
        href="https://github.com/amr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.icon} />
      </a>
      <a
        href="https://linkedin.com/in/amr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.icon} />
      </a>
    </div>
    <div className={styles.right}>
      <a href="/contact" className={styles.icon}>
        <HiOutlineMail />
      </a>
    </div>
  </nav>
);
export default Navbar;
