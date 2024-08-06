import "./footer.css";

import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
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

        <p className="footer__copyright text-cs">
          &copy; 2024 <span>Pamela Miranda de Oliveira</span>. Todos os direitos reservados
        </p>

        <p className="footer__copyright text-cs">
          Desenvolvido por <span>Pamy</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;