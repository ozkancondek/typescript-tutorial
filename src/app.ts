import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
//import js file

// //lesson-11***************************

// const anchor = document.querySelector(`a`)!;
// //catch the <a> tag on footer with dom
// //if i know its exist in html page, i am using !

// //thats the second method to prevent null return with anchor.href
// // if (anchor){
// //     console.log(anchor.href)
// // }

// console.log(anchor.href);

// //pick a form in html

// //const form  = document.querySelector("form")!; // i know its exist
// //here if i hover the form, its an html element
// //const form = document.querySelector(".new-item-form"); //with class name
// //here when i hover, i see that it is only an element and to prevent it
const form = document.querySelector(".new-item-form") as HTMLFormElement; //with class name

// console.log(form);

// //inputs

// //grap all inputs from html

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
  list.render(doc, type.value, "end");
});

//   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
//   //console.log(type.value, tofrom.value, details.value, amount.value);  value of amount is string but i want to is as a number
// });

//lesson-12**************************
//classes
//what is class:blueprint for an object

/**********************************************/
//Invoice class carried to module. lesson-14

/********************************************/

/* interface IsPerson {
  name: string;
  age: number;
  speak(m: string): void;
  spend(s: number): number;
}
//follow this structure

const me: IsPerson = {
  name: "ozkan",
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spend ", amount);
    return amount;
  },
};

//console.log(me);
const greetPerson = (person: IsPerson) => {
  console.log("helo ", person.name);
};
//greetPerson({nmae:"ozkan" }) not allowed
greetPerson(me); */

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("ozkan", "web developer", 250);
docTwo = new Payment("condek", "fulllstack ", 2589);
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice("mario", "work on a mario website", 250);
const invTwo = new Invoice("ozkan", "work on a ozkan website", 300);

let invoices: Invoice[] = [];
//only objects which are created in Invoice class can added to this array
//invoices.push("ozkan") not allowed
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

//lesson-13*****************

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format()); // inv.details not gonna work because it private
});

// now i can change the props of object because its public

//invOne.client = "changedclıentname"; // if it default public i can change the client because ıts publıc

//   readonly client: string; //i can read from outside but cant change the value
//    private details: string; // now i cant access to details directly from outside
//   public  amount: number; //its default value and everone can make arregement on it

//lesson-13*****************
//readonly private public

//lesson-14
//creating Invoice module
//update ts config
//html file, add type="module"

//lesson-15 interfaces

//lesson-16:interfaces with classes

//lesson-17: Rendering an HTML Template

//lesson-18 generics
//reusable blocks of codes

const addUID = <T>(obj: T) => {
  // const addUID = (obj: object) => {
  //console.log(firstDoc.name); i cant reach to name
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let firstDoc = addUID({ name: "ozkan", age: 40 });

console.log(firstDoc.name);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docthree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "ozkan" },
};

//T could be object, i cant assign it a string
