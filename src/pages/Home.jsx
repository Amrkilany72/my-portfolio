import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.home}>
      <div className={styles.titleBlock}>
        <span className={styles.intro}>HI, I'M</span>{' '}
        <h1 className={styles.nickname}>KILANY</h1>{' '}
      </div>
      <div className={styles.descriptionBlock}>
        <span className={styles.fullname}>Amr Kilany</span>{' '}
        <p className={styles.description}>
          A passionate Web Developer crafting modern, clean and functional
          websites.
        </p>
      </div>
      <button className={styles.button} onClick={() => navigate('/projects')}>
        View My Work
      </button>
    </section>
  );
};
export default Home;
