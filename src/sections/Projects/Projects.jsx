import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Project1 from "../../assets/EduHub.png";
import Project2 from "../../assets/ShoppingCart.png";
import Project3 from "../../assets/FindMyGit.png";
import Project4 from "../../assets/BlogApp.png";

function Projects() {

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Project1}
          link="https://github.com/Man0sh-r0y/EduHub"
          h3="EduHub"
          p="EdTech Platform"
          hostLink="https://eduhubbymanash.vercel.app"
        />
        <ProjectCard
          src={Project2}
          link="https://github.com/Man0sh-r0y/Shopping-Cart-using-Redux"
          h3="Shopping cart"
          p="E-commerce Cart Application"
          hostLink="https://shopping-cart-by-manash.vercel.app"
        />
        <ProjectCard
          src={Project3}
          link="https://github.com/Man0sh-r0y/FindMyGit"
          h3="FindMyGit"
          p="Find Any Github User's data"
          hostLink="https://find-github-users-by-manash.vercel.app"
        />
        <ProjectCard
          src={Project4}
          link="https://github.com/Man0sh-r0y/BlogVista"
          h3="BlogVista"
          p="Static Blogging App UI"
          hostLink="https://blog-website-by-manash.vercel.app"
        />
      </div>
    </section>
  );
}

export default Projects;
