//lesson 2*******************

// const myName = "ozkan condek";
// console.log(myName);

// //get inputs

// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => {
//   console.log(input);
// });

//lesson 3************

//we have only one number type

let myName = "ozkan condek";
let age = 25;
let condition = false;

//myName = 20;  not allowed to change type but its allowed for the same type
myName = "example";

const circ = (diameter) => {
  return diameter * Math.PI;
};

console.log(circ(1));
//console.log(circ("hello"));   NuN

const circ2 = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(5));
//console.log(circ("hello"));   Nuot gonna work
