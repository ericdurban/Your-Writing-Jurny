import Card from "./components/Card";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Worldbuilding from "./pages/Worldbuilding";
import NovelWriting from "./pages/NovelWriting";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <h1 className="app-title">
              Your Writing <span className="app-main-title">Jurny</span>
            </h1>
            <p className="app-subtitle">
              Where worldbuilding and novel writing collide
            </p>
            <div className="card-container">
              <Card
                title="Worldbuilding"
                content="Build rich and immersive worlds for your stories with detailed lore, characters, and settings."
                icon={"🌍"}
                iconBackgroundColor={"#BBDEFB"}
                link="/worldbuilding"
              />
              <Card
                title="Novel Writing"
                content="Write, organize, and track your stories from concept to completion."
                icon={"📚"}
                iconBackgroundColor={"#BBDEFB"}
                link="/novel-writing"
              />
            </div>
          </div>
        }
      />
      <Route path="/worldbuilding" element={<Worldbuilding />} />
      <Route path="/novel-writing" element={<NovelWriting />} />
    </Routes>
  );
}

export default App;
