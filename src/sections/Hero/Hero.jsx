import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ProfilePhoto.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const typedRef = useRef(null); // Reference for Typed.js instance

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 1000,
      loop: true
    });
  
    return () => typed.destroy(); // Cleanup on unmount
  }, []);
  
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Manash Roy"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Manash
          <br />
          Roy
        </h1>
        {/* <h2>Full Stack Developer</h2> */}
        <h2><div className="role" ref={typedRef}></div></h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Man0sh-r0y" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/manash-roy/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps using React & Node Js for commercial
          businesses.
        </p>
        <a href={CV} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
