import { useEffect } from "react";
import { useState } from "react";

export const BrokenCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);

  return <main className="count">{count}</main>;
};
