import React from "react";

export default function GameCard(props) {
  return (
    <div>
      <div className="game-card">
        <img
          id={props.id}
          key={props.keys}
          onClick={props.onClick}
          src={props.img}
          alt="game card"
          className={props.className}
        />
      </div>
    </div>
  );
}
