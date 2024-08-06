/* eslint-disable no-unused-vars */
import "./services.css";
import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">O que eu faço?</h2>
      <p className="section__subtitle">
        Meu <span>foco</span>
      </p>

      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {services.map(({ name, title, description, id }, index) => {
          return (
            <SwiperSlide className="services__item card card-one" key={id}>
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              <img src={shapeTwo} className="shape c__shape"></img>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Foco</span>
      </div>
    </section>
  );
}

export default Services;