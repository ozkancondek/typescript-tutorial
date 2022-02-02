import { useState } from "react";
import "./styles.css";

type QuestionProps = {
  question: string;
  answer: string;
};

export const UseStateHook = ({ question, answer }: QuestionProps) => {
  //const [isHidden,setIsHidden] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState(true);
  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={isHidden ? "blurred" : "visible"}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => setIsHidden(false)}>Toggle Answer</button>
      </footer>
    </article>
  );
};
