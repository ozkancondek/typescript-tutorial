import "./App.css";
import { NameTag } from "./lectures/NameTag";
import { useState } from "react";

function App() {
  const [name, setMyName] = useState("ozkan"); //it should be a string
  return (
    <div className="App">
      <NameTag name={name} />
    </div>
  );
}

export default App;
