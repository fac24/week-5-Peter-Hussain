import React from "react";
import "./App.css";
import PageLayout from "./components/PageLayout";
import x from "./components/GameLogic.js";

function App() {
  x();
  return <PageLayout></PageLayout>;
}

export default App;
