import "./App.css";
import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import GameCardContainer from "./components/GameCardContainer";

function App() {
  return (
    <PageLayout>
      <NavBar />
      <GameCardContainer />
    </PageLayout>
  );
}

export default App;
