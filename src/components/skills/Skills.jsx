/* eslint-disable no-unused-vars */
import "./skills.css";
import { skills } from "../../Data";
import shapeOne from "../../assets/shape-1.png";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs"> Habilidades </h2>
      <p className="section__subtitle">
        Minhas <span>Skills</span>
      </p>

      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills__item" key={index}>
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Skills</span>
      </div>
    </section>
  );
}

export default Skills;