import "./App.css";
import { NameTag } from "./lectures/NameTag";
import { useState } from "react";
import { UseStateHook } from "./lectures/UseStateHook";

import { questions } from "./lectures/questions";
import { BrokenCounter } from "./lectures/BrokenCounter";
import ClassBasedComponents from "./lectures/ClassBasedComponents";
import CounterWithHooksandEvents from "./lectures/CounterWithHooksandEvents";

function App() {
  const [name, setMyName] = useState("özkan"); //it should be a string
  return (
    <div className="App">
      {/*  <NameTag name={name} /> */}
      {/*       <main>
        {questions.map((q) => (
          <UseStateHook question={q.question} answer={q.answer} key={q.id} />
        ))}
      </main> */}
      {/*  <BrokenCounter /> */}
      {/*  <ClassBasedComponents incident={"Coffee Spill"} /> */}
      <CounterWithHooksandEvents />
    </div>
  );
}

export default App;
