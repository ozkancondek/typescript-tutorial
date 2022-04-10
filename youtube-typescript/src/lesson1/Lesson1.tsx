import React from "react";

export const Lesson1 = () => {
  //ts inheritance
  const channel = {
    name: "react tutorial",
    follower: 4568,
  };
  //i can give a manual path
  const channel2: { name: string; follower: number } = {
    name: "react tutorial",
    follower: 4568,
  };
  //or i can  create an interface

  interface ForChannel {
    name: string;
    follower: number;
    date?: string | number;
  }

  const channel3: ForChannel = {
    name: "react tutorial",
    follower: 4568,
  };
  // channel3 need to have two determined keys and in given format
  //but i can arrange it as optional. date ? : number examply

  //function
  const sumValues = (a: number, b: number) => a + b;
  const result = sumValues(3, 5); // typescript now the type of result is a number

  //define type for functions
  type SumType = (x: number, y: number) => number;

  const sumValues2: SumType = (x, y) => x + y;

  //union type
  type name = number | string;

  //literal type
  type name2 = "ozkan" | "ozkan2";

  return <div>Lesson1</div>;
};
