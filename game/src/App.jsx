import "./App.css";
import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <PageLayout>
      <NavBar />
      <GameGrid />
    </PageLayout>
  );
}

export default App;
