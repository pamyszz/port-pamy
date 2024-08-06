import { cv } from "../../Data";
import Card from "./Card";
import "./Resume.css";
import "./resume.css";
import shapeOne from "../../assets/shape-1.png";

function Resume() {
  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Currículo</h2>
      <p className="section__subtitle">
        Minha <span>história</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Trajetória Acadêmica</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume__group">
          <h3 className="resume__heading">Experiência</h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">História</span>
      </div>
    </section>
  );
}

export default Resume;