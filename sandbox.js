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
