import Items from "./Items";
import List from "./List";
import "./portfolio.css";
import { projects } from "../../Data";
import { useState } from "react";
import shapeOne from "../../assets/shape-1.png";
import { AnimatePresence } from "framer-motion";

const allNavList = [
  "Ver Todos",
  ...new Set(projects.map((project) => project.category)),
];

const INITIAL_ITEMS_TO_SHOW = 6; // 

function Portfolio() {
  const [projectItems, setMenuItems] = useState(projects);
  const [itemsToShow, setItemsToShow] = useState(INITIAL_ITEMS_TO_SHOW);
  const [showAll, setShowAll] = useState(false);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }

    const newProjectItem = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItem);
  };

  const handleShowMore = () => {
    setItemsToShow((prev) => prev + INITIAL_ITEMS_TO_SHOW);
    if (itemsToShow >= projectItems.length) {
      setShowAll(true); 
    }
  };

  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        Meus <span>Projetos</span>
      </p>

      <List list={allNavList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems.slice(0, itemsToShow)} />
        </AnimatePresence>
      </div>

      <div className="portfolio__button-wrapper">
      {!showAll && (
        <button className="portfolio__button" onClick={handleShowMore}>
          Ver Mais
        </button>
      )}
    </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__ttile">Portfolio</span>
      </div>
    </section>
  );
}

export default Portfolio;
