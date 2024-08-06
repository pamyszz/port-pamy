import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import "./home.css";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home() {
  const cvPath = '/public/CV.pdf'; 

  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Olá, <span>Meu nome é</span>
          </p>

          <h1 className="home__title text-cs">
            <span>PAMELA</span> MIRANDA
          </h1>

          <p className="home__job">
            <span className="text-cs">Eu sou</span> <b>Desenvolvedora Web</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="Profile" className="home__profile" />
            </div>

            <p className="home__data home__data-two">
              <span className="text-lg">40</span>
              <span className="text-sm text-cs">
                Projetos <span>no Github</span>
              </span>
            </p>

            <img src={shapeOne} className="shape shape__1" alt="Shape One" />
            <img src={shapeTwo} className="shape shape__2" alt="Shape Two" />
            <img src={shapeTwo} className="shape shape__3" alt="Shape Two" />
          </div>

          <p className="home__text">
            Sou de São Paulo - SP, sou apaixonada por tecnologia com experiência em web design, cloud e desenvolvimento full stack com Java.
          </p>

          <div className="home__socials">
            <a href="https://www.linkedin.com/in/pamelami/" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/pamyy_szz" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/pamyszz" className="home__social-link" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a href={cvPath} className="btn text-cs" download>
              Baixar CV
            </a>
            <a href="#skills" className="hero__link text-cs">
              Minhas Habilidades
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="Shape One" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Web Developer</span>
      </div>
    </section>
  );
}

export default Home;
