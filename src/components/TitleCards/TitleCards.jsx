import React, { useEffect, useRef } from "react";

import "./TitleCards.css";

import cardsData from "../../assets/Cards/CardsData";

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="titleCard">
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {cardsData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="Card Image" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
