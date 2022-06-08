import GameCard from "./components/GameCard.jsx";

export default function GameCard(props) {
  return <div className="game-card">{props.children}</div>;
}
