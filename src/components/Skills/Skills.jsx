import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills">
        <h1 className="skillh">My Skills</h1>
        <li>
          <h3>HTML</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>

        <li>
          <h3>CSS</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>

        <li>
          <h3>Javascript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>

        <li>
          <h3>React Js</h3>
          <span className="bar">
            <span className="reactjs"></span>
          </span>
        </li>
        <li>
          <h3>Bootstrap</h3>
          <span className="bar">
            <span className="bootstrap"></span>
          </span>
        </li>
        <li>
          <h3>SCSS</h3>
          <span className="bar">
            <span className="scss"></span>
          </span>
        </li>
        <li>
          <h3>Figma</h3>
          <span className="bar">
            <span className="figma"></span>
          </span>
        </li>
        <li>
          <h3>Canva</h3>
          <span className="bar">
            <span className="canva"></span>
          </span>
        </li>
  

      </div>
    </div>
  );
};

export default Skills;
