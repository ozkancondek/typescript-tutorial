// //lesson-11***************************
//follow this structure
const me = {
    name: "ozkan",
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spend ", amount);
        return amount;
    },
};
//console.log(me);
const greetPerson = (person) => {
    console.log("helo ", person.name);
};
//greetPerson({nmae:"ozkan" }) not allowed
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
//import js file
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
//readonly private public
//lesson-14
//creating Invoice module
//update ts config
//html file, add type="module"
//lesson-15 interfaces
