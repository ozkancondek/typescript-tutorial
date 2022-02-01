import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import { Hooks } from "./components/Hooks";

function App() {
  let myName = "ozkan";
  let desc = "web developer";
  let age = 25;
  return (
    <div className="App">
      <Hello
        name={myName}
        age={age}
        desc={desc}
        onSubmithandler={(name) => {
          console.log(name);
        }}
      />
      <Hooks name={"ozkan"} age={6568} />
    </div>
  );
}

export default App;
