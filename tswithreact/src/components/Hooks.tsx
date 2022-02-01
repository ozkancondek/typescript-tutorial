import React, { useRef, useState } from "react";

interface IHooks {
  name: string;
  desc?: string;
  age: number;
}
interface IObject {
  myNumber: number | string | null;
}

export const Hooks: React.FC<IHooks> = ({ name, age }) => {
  //Type inference, ts estimates that this var in number type
  const [newState, setnewState] = useState<number | string | undefined>(3507);
  const [newobject, setNewObject] = useState<IObject>({ myNumber: 987151 });
  const [counter, setCounter] = useState<number>(0);

  //its not possible thats why define types
  //  setnewState("45");

  //usage of useref
  const inputref = useRef<HTMLInputElement>(null);
  const divref = useRef<HTMLDivElement>(null);
  const buttonref = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{newState}</p>
      <p>{newobject.myNumber}</p>
      <p>counter:{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>

      <div ref={divref}>
        <input type="text" ref={inputref} />
        <button ref={buttonref}></button>
      </div>
    </div>
  );
};
