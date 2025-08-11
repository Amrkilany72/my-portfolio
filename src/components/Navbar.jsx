import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'WORK', path: '/work' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.burger} onClick={() => setMenuOpen((o) => !o)}>
          <motion.span
            className={styles.line}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 4 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className={styles.line}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -4 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className={styles.center}>
        <a
          href="https://github.com/Amrkilany72"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/amr-kilany-a2a492275"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>

      <div className={styles.right}>
        <Link to="/contact" className={styles.icon}>
          <HiOutlineMail />
        </Link>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className={styles.sidebar}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.sidebarContent}>
                {links.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    className={styles.menuItem}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <Link to={link.path} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
