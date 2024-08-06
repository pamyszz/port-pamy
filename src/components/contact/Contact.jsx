/* eslint-disable no-unused-vars */

/////////////////////////////////////////////////////
//     Used google sheets and sheet.best as a DB
/////////////////////////////////////////////////////

import { useState } from "react";
import "./contact.css";
import {
  FaRegAddressBook,
  FaRegUser,
  FaRegMap,
  FaRegEnvelope,
} from "react-icons/fa";
import axios from "axios";
import shapeOne from "../../assets/shape-1.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = function (e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    axios
    .post(
        "https://sheet.best/api/sheets/1ead421e-9360-42c1-8a1d-92575b4a48bb",
        form
      )
      .then((response) => {
        console.log(response);
        setForm({ name: "", email: "", subject: "", message: "" });
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">Fale comigo!</h2>
      <p className="section__subtitle">
        Vamos <span>Conversar sobre suas ideias</span>
      </p>

      <div className="contact__container container grid">
        <div className="contact__contect">
          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegMap />
            </span>
            <h3 className="contact__card-title">Endereço</h3>
            <p className="contact__card-data">São Paulo, SP, Brasil</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegUser />
            </span>
            <h3 className="contact__card-title">Freelancer</h3>
            <p className="contact__card-data">Disponível Agora</p>
          </div>

          <div className="contact__card">
            <span className="contact__card-icon">
              <FaRegEnvelope />
            </span>
            <h3 className="contact__card-title">Email</h3>
            <p className="contact__card-data">pamelamiranda.o87@gmail.com</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group grid">
            <div className="contact__form-div">
              <label className="label contact__form-tag text-cs">
                Seu nome completo: <b>*</b>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label className="label contact__form-tag text-cs">
                Seu endereço de E-mail: <b>*</b>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                className="contact__form-input"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <label className="label contact__form-tag text-cs">
              Seu objetivo:  <b>*</b>
            </label>
            <input
              type="text"
              name="subject"
              onChange={handleChange}
              value={form.subject}
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="label contact__form-tag text-cs">
              Escreva sua Mensagem:  <b>*</b>
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              value={form.message}
              className="contact__form-input"
            ></textarea>
          </div>

          <div className="contact__submit">
            <p>* Aceite os termos e condições</p>
            <button type="submit" className="btn text-cs">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Contato</span>
      </div>
    </section>
  );
}

export default Contact;