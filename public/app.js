"use strict";
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
// const form = document.querySelector(".new-item-form") as HTMLFormElement; //with class name
// console.log(form);
// //inputs
// //grap all inputs from html
// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;
// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
//   //console.log(type.value, tofrom.value, details.value, amount.value);  value of amount is string but i want to is as a number
// });
//lesson-12**************************
//classes
//what is class:blueprint for an object
class Invoice {
    //   readonly client: string; //i can read from outside but cant change the value
    //    private details: string; // now i cant access to details directly from outside
    //   public  amount: number; //its default value and everone can make arregement on it
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        //constructor(c: string, d: string, a: number) { i can also use like this
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on a mario website", 250);
const invTwo = new Invoice("ozkan", "work on a ozkan website", 300);
let invoices = [];
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
