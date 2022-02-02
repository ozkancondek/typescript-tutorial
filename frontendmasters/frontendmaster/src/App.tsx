import "./App.css";
import { NameTag } from "./lectures/NameTag";
import { useState } from "react";
import { UseStateHook } from "./lectures/UseStateHook";

import { questions } from "./lectures/questions";

function App() {
  const [name, setMyName] = useState("özkan"); //it should be a string
  return (
    <div className="App">
      {/*  <NameTag name={name} /> */}
      <main>
        {questions.map((q) => (
          <UseStateHook question={q.question} answer={q.answer} key={q.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
