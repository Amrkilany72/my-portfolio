import styles from './HomeProjectsPreview.module.css';
import { Link } from 'react-router-dom';

const previewProjects = [
  {
    title: 'Portfolio Website',
    image: 'public/subnail-worldwise.jpg',
    type: 'Personal',
    live: 'https://amrkilany.dev',
  },
  {
    title: 'Landing Page',
    image: '/images/landing.png',
    type: 'Client',
    live: 'https://example.com',
  },
  {
    title: 'Dashboard UI',
    image: '/images/dashboard.png',
    type: 'Design',
    live: '',
  },
];

export default function HomeProjectsPreview() {
  return (
    <section className={styles.preview}>
      <h2 className={styles.heading}>Latest Projects</h2>
      <div className={styles.grid}>
        {previewProjects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.type}</p>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                View Live
              </a>
            )}
          </div>
        ))}
      </div>
      <Link to="/work" className={styles.viewAll}>
        View All Projects →
      </Link>
    </section>
  );
}
