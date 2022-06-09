import React from "react";

export default function GameCard(props) {
  return (
    <div>
      <div id={props.id} key={props.keys} className="game-card">
        <img
          onClick={props.onClick}
          src={props.img}
          alt="game card"
          className={props.className}
        />
      </div>
    </div>
  );
}
