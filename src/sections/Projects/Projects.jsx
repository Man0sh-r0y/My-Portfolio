import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Project1 from "../../assets/EduHub.png";
import Project2 from "../../assets/TicTacToe.png";
import Project3 from "../../assets/BlockWebsites.png";
import Project4 from "../../assets/FindMyGit.png";

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
          link="https://github.com/Man0sh-r0y/RealTimeMultiplayerTicTacToe"
          h3="RealTime Tic-Tac-Toe"
          p="Tic-Tac-Toe Game"
          hostLink="https://github.com/Man0sh-r0y/RealTimeMultiplayerTicTacToe"
        />
        <ProjectCard
          src={Project3}
          link="https://github.com/Man0sh-r0y/FocusShield"
          h3="FocusShield"
          p="Block Distracting Websites"
          hostLink="https://github.com/Man0sh-r0y/FocusShield"
        />
        <ProjectCard
          src={Project4}
          link="https://github.com/Man0sh-r0y/FindMyGit"
          h3="FindMyGit"
          p="Find Any Github User's data"
          hostLink="https://find-github-users-by-manash.vercel.app"
        />
      </div>
    </section>
  );
}

export default Projects;
