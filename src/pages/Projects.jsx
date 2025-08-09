import styles from './Projects.module.css';

const projects = [
  {
    title: 'Project One',
    description: 'React, Firebase, Tailwind',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Next.js, MongoDB',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className={styles.card}>
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-indigo-500"
          >
            <h3 className="text-xl font-bold text-indigo-300">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-400 underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
