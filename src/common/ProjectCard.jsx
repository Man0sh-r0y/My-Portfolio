import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from './ThemeContext';

function ProjectCard({ src, link, h3, p, hostLink }) {

  const { theme } = useTheme();
  const style = { color: theme == 'light' ? "black" : "white" };

  return (
    <div>

      <a href={link} target="_blank">
        <img className="hover" src={src} alt={`${h3} logo`} />
      </a>

      <a href={hostLink} target="_blank">
        <h3>{h3}</h3>
        <FaExternalLinkAlt style={style} />
      </a>

      <p>{p}</p>

    </div>
  );
}

export default ProjectCard;
