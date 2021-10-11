import React from "react";

import "./scss/main.scss";

import { Hero } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero title="Samurai King Resting" />
    </div>
  );
};

export default App;
