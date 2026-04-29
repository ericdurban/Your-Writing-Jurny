import Card from "./components/Card";
import "./App.css";

function App() {
  return (
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
          content="This is the content for the first card."
          icon={"🌍"}
          iconBackgroundColor={"#BBDEFB"}
        />
        <Card
          title="Novel Writing"
          content="This is the content for the second card."
          icon={"📚"}
          iconBackgroundColor={"#BBDEFB"}
        />
      </div>
    </div>
  );
}

export default App;
