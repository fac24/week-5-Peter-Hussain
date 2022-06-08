import React from "react";
import "./App.css";
import PageLayout from "./components/PageLayout";
import x from "./components/GameLogic.js";
import NavBar from "./components/NavBar";

function App() {
  return (
    <PageLayout>
      <NavBar />
    </PageLayout>
  );
}

export default App;
