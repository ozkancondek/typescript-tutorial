const sayHello = (message) => {
  console.log(message);
};

sayHello("Hello");

//typeannotations  let x:string;
/* any 
number 
string 
bool 
arrays string[], number[], any[]
enum 
tuple 
unknown 
type inference   thats mean if i write let x = 55, ts understand that type of x number 

*/

enum Color {
  Purple,
  Red,
  blue,
}

let bgColor = Color.Purple;
bgColor = Color.blue;

//color.Purple = 0

//tuple
let error: [string, number];
error = ["not found", 404];

//type assertions

let message;
message = "ozkan";
//ts cant understand the type. its any now
const newMessage = (<string>message).toLocaleLowerCase();
//i tell to ts type of variable. otherwise i cant reach to smart methods
const newMessage2 = (message as string).toLowerCase();

//object

let user = { name: "ozkan", afge: 45 };
//type inheritance. hover over user
//its ts type object type

type userColor = {
  name: "black" | "white";
  hex: string;
};

let user2: {
  name: string;
  age: number;
  role: "admin" | "user"; // literal type spesifically i am defining the type
  color: userColor; // custom type
};
user2.color.hex = "#000";
user2.color.name = "black";
//what if i want to use age in both type string and number
/// i use union type
//age:string|number

//functions

/* const add=  (num1,num2)=>{
    console.log(num1+num2)
}

add("3",5) */

//it works actually if i give one of the arguments as a string
const add = (num1: number, num2: number) => {
  console.log(num1 + num2);
  return num1 + num2;
};

add(3, 5);
//returns number

const logUser = (firstname: string, lastname?: string) => {
  // optional parameter
  console.log(firstname, lastname);
};
const logUser2 = (firstname = "ozkan", lastname?: string) => {
  // optional parameter
  console.log(firstname, lastname);
};

logUser2("ozkanozkan", "condek");

//change ozkan to ozkanozkan

//interfaces

interface Employee1 {
  name: string;
  readonly empCode: number;
  age?: number;
}

interface Person1 extends Employee1 {
  //extending to interfaces
  country: string;
}

//new receord will follow employee path

let newEmployee: Employee1;

newEmployee = {
  name: "ozkan",
  // age: 25,
  empCode: 1,
};

//implementing interfaces

interface IEmployee {
  name: string;
  empCode: number;
  age: number;
  getSalary: (number) => number;
}

class EmployeeClass implements IEmployee {
  name: string;
  empCode: number;
  age: number;

  constructor(empCode: number, name: string, age: number) {}
  getSalary = (empCode: number) => {
    return 1000;
  };
}

let newEmp = new EmployeeClass(2, "ozkan", 78);
