import React from "react";
import "./card-list.styles.css";
import CardContainer from "../card-container/card-container.component";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
