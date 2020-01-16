import React from "react";
import AutoComplete from "./AutoComplete";
import "./App.css";

function App() {
  const suggestions = [
    { animal: "chicken" },
    { animal: "cow" },
    { animal: "dog" },
    { animal: "duck" }
  ];

  return (
    <div className="autoComplete">
      <AutoComplete suggestions={suggestions} />
    </div>
  );
}

export default App;
