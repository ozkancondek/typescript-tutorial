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
// let myName = "ozkan condek";
// let age = 25;
// let condition = false;
//myName = 20;  not allowed to change type but its allowed for the same type
// myName = "example";
// const circ = (diameter) => {
//   return diameter * Math.PI;
// };
// console.log(circ(1));
//console.log(circ("hello"));   NuN
// const circ2 = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(5));
//console.log(circ("hello"));   Nuot gonna work
//lesson 4 ***************************
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
// //i defined it but not initialized it then say it has to be string type
// let age: number;
// let condition: boolean;
// //age = "ozkan"; not allowed
// age = 250;
// //arrays
// let ninjas: string[];
// //it could be only array with strings
// //ninjas = [8,6,2,"d"] not allowed
// ninjas = ["a", "b"];
// //ninjas.push("d") got an error because i didnt initialize it
// let ninjas1: string[] = [];
// //now i can push
// //union types
// let mixed: (string | number)[] = [];
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
// //lesson 6 ******************************
// let age:any;  //any type
// age = true;
// age = 5;
// age = "ozkan";
// age = {name:"ozkan"}
// let mixed:any[]=[];
// mixed.push(8)
// mixed.push("ozkan")
// //add any type to array
// let ninja : {name:any,age:any}
// ninja = {name:45,age:"ozkan"}
