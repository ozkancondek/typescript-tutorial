import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";

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
    </div>
  );
}

export default App;
