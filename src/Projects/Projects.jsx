import styles from './ProjectsStyles.module.css';
import ProjectCard from '../Common/ProjectCard';
import image from '../assets/image.png';
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={image}
          link="https://github.com/"
          h3="projectName"
          p="ProjectDescription"
        />
        <ProjectCard
          src={image}
          link="https://github.com/"
          h3="ProjectName"
          p="ProjectDescription"
        />
        <ProjectCard
          src={image}
          link="https://github.com/"
          h3="ProjectName"
          p="ProjectDescription"
        />
        <ProjectCard
          src={image}
          link="https://github.com/"
          h3="ProjectName"
          p="ProjectDescription"
        />
      </div>
    </section>
  );
}

export default Projects;
