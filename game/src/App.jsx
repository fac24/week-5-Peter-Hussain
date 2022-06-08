import React from "react";
import "./App.css";
import PageLayout from "./components/PageLayout";
import x from "./components/GameLogic.js";
import NavBar from "./components/NavBar";
import GameCard from "./components/GameCard";

function App() {
  return (
    <PageLayout>
      <NavBar />
      <GameCard>a</GameCard>
    </PageLayout>
  );
}

export default App;
