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
  }

  const channel3: ForChannel = {
    name: "react tutorial",
    follower: 4568,
  };

  return <div>Lesson1</div>;
};
