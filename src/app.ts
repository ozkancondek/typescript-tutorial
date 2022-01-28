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
