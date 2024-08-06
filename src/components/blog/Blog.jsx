/* eslint-disable no-unused-vars */
import "./blog.css";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";

import shapeOne from "../../assets/shape-1.png";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Artigos</h2>
      <p className="section__subtitle">
        Meus <span>Artigos e Atividades</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Maio 12, 2024</span>
          <h3 className="blog__title">Os Três Pilares do Sucesso Profissional</h3>
          <p className="blog__description">
          Já pensaram no que impulsiona o sucesso no mundo profissional? Após uma aula inspiradora com Adriana Parravano Neves, descobrimos três pilares essenciais: Inteligência Emocional, Responsabilidade Compartilhada e Habilidade de Trabalhar em Equipe. Entender e usar nossas emoções, assumir responsabilidades em equipe e unir habilidades são chave para o sucesso...
          </p>
          <a href="" className="link">
            Leia Mais
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Março 17, 2023</span>
          <h3 className="blog__title">Psicologia Cognitiva no UX Design</h3>
          <p className="blog__description">
          Ei pessoal, vocês já ouviram falar sobre psicologia cognitiva?<br/><br/>

          Eu não sabia muito sobre isso até começar a estudar UX design. Basicamente, essa área estuda como o cérebro humano processa informações e toma decisões...<br/><br/>
          </p>
          <a href="" className="link">
            Leia Mais
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Abril 11, 2024</span>
          <h3 className="blog__title">
          Empoderamento Feminino na Tecnologia
          </h3>
          <p className="blog__description">
          Entrar no mundo da tecnologia como mulher muitas vezes parece uma jornada solitária, cheia de dúvidas e obstáculos. Mas, recentemente, participei de um evento com mulheres incríveis e percebi que não estamos sozinhas. <br/><br/>

          Ouvindo histórias de lutas e conquistas, encontrei força para acreditar em mim mesma novamente...
          </p>
          <a href="" className="link">
            Leia Mais
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>
          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Artigos</span>
      </div>
    </section>
  );
}

export default Blog;