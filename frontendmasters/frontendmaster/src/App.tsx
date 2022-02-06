import "./App.css";
import { NameTag } from "./lectures/NameTag";
import { useState } from "react";
import { UseStateHook } from "./lectures/UseStateHook";

import { questions } from "./lectures/questions";
import { BrokenCounter } from "./lectures/BrokenCounter";
import ClassBasedComponents from "./lectures/ClassBasedComponents";
import CounterWithHooksandEvents from "./lectures/CounterWithHooksandEvents";
import { DogFacts } from "./lectures/DogFacts";
import Typereducer from "./lectures/Typereducer";
import CounterReducer from "./lectures/CounterReducer";
import { ContextApi } from "./lectures/contaexapi/ContextApi";
import { UtilityTypes } from "./lectures/utility/UtilityTypes";
import { HigherorderComponents } from "./lectures/higherOrderComponents/HigherOrderComponents";
import { HOCExample } from "./lectures/higherOrderComponents/example/HOCExample";
import { LimitingProps } from "./lectures/limitingProps/LimitingProps";
import { PolymorphicComponents } from "./lectures/polymorphicCpmponents/PolymorphicComponents";
import { PolymorphicExample } from "./lectures/polymorphicCpmponents/exercise/PolymorphicExercise";

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
      {/*  <CounterWithHooksandEvents /> */}
      {/* <DogFacts /> */}
      {/* <Typereducer /> */}
      {/*  <CounterReducer /> */}
      {/* <ContextApi /> */}
      {/*   <UtilityTypes /> */}
      {/*   <HigherorderComponents /> */}
      {/*  <HOCExample /> */}
      {/*  <LimitingProps /> */}
      <PolymorphicComponents />
      <PolymorphicExample />
    </div>
  );
}

export default App;
