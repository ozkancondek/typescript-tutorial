// //lesson 2*******************

// const myName = "ozkan condek";
// console.log(myName);

// //get inputs

// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => {
//   console.log(input);
// });

// //lesson 3************

// //we have only one number type

// let myName = "ozkan condek";
// let age = 25;
// let condition = false;

// //myName = 20;  not allowed to change type but its allowed for the same type
// myName = "example";

// const circ = (diameter: any) => {
//   return diameter * Math.PI;
// };

// console.log(circ(1));
// //console.log(circ("hello"));   NuN

// const circ2 = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(5));
//console.log(circ("hello"));   Nuot gonna work

// //lesson 4 ***************************

// //array

// const names = ["a","b","c"]

// names.push("d") // allowed

// //names.push (5)
// //names [0]=6;
// // not allowed

// //define mixed array

// let mixed = ["a",5,"v",8,9]
// //ts understand that this is an mixed array
// mixed[0]=0;
// mixed.push("ozkan")

// //object

// let ninja = {
//     name:"mario",
//     belt:"black",
//     age:20
// }

// ninja.age = 40;
// ninja.name = "ozkan"
// //ninja.age = "string" not allowed
// //ninja.skills = ["draw","guitar"] not alloe´wed because its not exist in object
// // ninja.cond = true not allowed
// // ninja.surname = "condek" not allowed

// //but i can define the object again with the same keys but with different values
// ninja = {
//     name:"ozkan",
//     belt:"orange",
//    // i get error if i dont define age
//    age:55
// }

// // lesson 5 *************

// //explicit types
// let myNmae: string;
// //i declared it but not initialized it then say it has to be string type
// let age: number;
// let condition: boolean;

// //age = "ozkan"; not allowed
// age = 250;

// //arrays

// let ninjas: string[];
// //it could be only array with strings

// //ninjas = [8,6,2,"d"] not allowed
// //ninjas.push("d") //got an error because i didnt initialize it
// ninjas = ["a", "b"];
// ninjas.push("d");

// let ninjas1: string[] = [];
// //now i can push but only the string datatypes

// //union types

// let mixed: (string | number)[] = [];
// //an array which is consisst of only strings and numbers

// mixed.push(3);
// //mixed.push(true) not allowed

// let uid: string | number;
// uid = 124;
// uid = "ozkan";
// //uid = false not allowed

// //objects

// let ninjaOne: object;

// ninjaOne = { name: "ozkan", age: 25 };

// let ninjaTwo: {
//   name: string;
//   age: number;
//   condition: boolean;
// };
// //it has to contain only three prop and types of props state below
// //ninjaTwo = {}not allowed

//lesson 6 ******************************
let age: any; //any type

age = true;

age = 5;
age = "ozkan";
age = { name: "ozkan" };

let mixed: any[] = [];

mixed.push(8);
mixed.push("ozkan");

//add any type to array

let ninja: { name: any; age: any };
ninja = { name: 45, age: "ozkan" };

//lessono7**************

//tsconfig

// //lesson 8 **********************

// let greet: Function;
// greet = () => {
//   console.log("hello");
// };

// const add = (a: number, b: number, c?: number | string) => {
//   //const add = (a: number, b: number, c: number | string = 10) => {   i am defining default parameter, so i cant use the question mark
//   //and if i call with three parameters like add(3,5,20) then c will equal to 20. overwrite
//   //put the optional paremeter at the end
//   console.log(a + b);
//   console.log(c);
//   // if i dont return anythink in function it gonna return void actually. Lack of return
// };
// //c is not necessary if i use question mark, but i dont use, i cant call the function with 2 parameters
// add(3, 5);

// const minus = (a: number, b: number) => {
//   return a + b;
// };

// let result = minus(4, 5);

// //result = "ozkan"  not allowed because we defined a datatype for result and its type is number+number = number

// //lesson-9***************

// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };

// // const logDetails = (uid:string|number,item:string)=>{
// //     console.log(`${item} has a uid of ${uid}`)
// // }
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello to you`);
// };

// //lesson-10***************************

// //let greet = Function;

// //example 1

// let greet: (a: string, b: string) => void;
// // in the future steps this function gonnna fallow this
// greet = (name: string, greeting: string) => {
//   //greet = (name:string,greeting:number)=>{  not allowed because type of parameter greeting state in path
//   console.log(`${name} says ${greeting}`);
// };

// //example2

// let calc: (a: number, b: number, c: string) => number;
// //this function returns a number

// calc = (numOne: number, numTwo: number, action: string) => {
//   //calc = (numOne: number, numTwo: number, action: string):number => { i don have to write it extra because i defined a path for it
//   if (action === "add") {
//     return numOne + numTwo;
//   } else {
//     return numOne;
//   }
// };

// //example3

// let logDetails: (obj: { name: string; age: number }) => void;

// type person = { name: string; age: number };
// logDetails = (ninja: person) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
//   //  return ninja.name;  i said void but i can also add a return
// };
