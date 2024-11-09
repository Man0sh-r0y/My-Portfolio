import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import HTML from "../../assets/HTML.png"
import CSS from "../../assets/CSS.png"
import JS from "../../assets/Javascript.svg"
import Node from "../../assets/NodeJs.svg"
import React from "../../assets/react.svg"
import Tailwind from "../../assets/Tailwind.png"
import Redux from "../../assets/Redux.svg"
import Git from "../../assets/Git.svg"
import MongoDB from "../../assets/MongoDB.svg"
import Express from "../../assets/Express.svg"
import Express2 from "../../assets/ExpressInDarkMode.svg"
import SQL from "../../assets/SQL.svg"


function Skills() {
  const { theme } = useTheme();
  const ExpressJsIcon = theme === 'light' ? Express : Express2;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={HTML} skill="HTML" />
        <SkillList src={CSS} skill="CSS" />
        <SkillList src={JS} skill="JavaScript" />
        <SkillList src={Node} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={React} skill="React" />
        <SkillList src={Tailwind} skill="Tailwind CSS" />
        <SkillList src={ExpressJsIcon} skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Redux} skill="Redux" />
        <SkillList src={Git} skill="Git" />
        <SkillList src={SQL} skill="SQL" />
        <SkillList src={MongoDB} skill="MongoDB" />
      </div>
    </section>
  );
}

export default Skills;
