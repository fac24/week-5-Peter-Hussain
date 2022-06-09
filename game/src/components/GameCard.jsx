import React from "react";

export default function GameCard(props) {
  return (
    <div>
      <div id={props.id} className="game-card">
        <img src={props.img} alt="game card" className="game-card-img" />
      </div>
    </div>
  );
}
