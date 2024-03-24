import "./App.css";
import Character from "./pages/Character";
import CharactersList from "./pages/CharactersList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" Component={CharactersList} />
        <Route strict exact path="/:id" Component={Character} />
      </Routes>
    </div>
  );
}

export default App;
