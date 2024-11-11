import React from "react";
import '../styles/skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si"; 

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
      
        <div className="skills-grid">
        
          <div className="skill-item">
            <FaHtml5 className="skill-icon fa-html5" />
            <h3 className="skill-title">HTML</h3>
          </div>
        
          <div className="skill-item">
            <FaCss3Alt className="skill-icon fa-css3-alt" />
            <h3 className="skill-title">CSS</h3>
          </div>
 
          <div className="skill-item">
            <FaJs className="skill-icon fa-js" />
            <h3 className="skill-title">JavaScript</h3>
          </div>
         
          <div className="skill-item">
            <FaReact className="skill-icon fa-react" />
            <h3 className="skill-title">React</h3>
          </div>
         
          <div className="skill-item">
            <SiTypescript className="skill-icon si-typescript" />
            <h3 className="skill-title">TypeScript</h3>
          </div>
        
          <div className="skill-item">
            <FaNodeJs className="skill-icon fa-node-js" />
            <h3 className="skill-title">Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
