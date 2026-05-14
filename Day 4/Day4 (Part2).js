// ___________________________________Post/Pre Increment Decrement Example________________________________
let a = 1;

console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// ___________________________________Comparison Operator Example________________________________
let b = 10;
let c = 15;
let d = b>=c;
let e = b<=c;
let f = b=c;
let g = b==c;

console.log(d,e,f,g);

// ___________________________________Conditional Statement Example________________________________
//  ___________________________________Prctical No.1 ________________________________
// let h = prompt();

// if(h >= 18) {
//     console.log("You're Eligible to vote");
// } else{
//     console.log("You're Not Eligible To Vote");
// }
// document.getElementsByClassName("first")[0].innerHTML = "Your Age is: " + h;

// ___________________________________Prctical No.3 ________________________________
// let i = Number(prompt());
// if(i > 0){
//     console.log("This Number is Positive");
// } else if (i === 0){
//     console.log("This Number is Neutral");
// } else{
//     console.log("This Number is Negative");
// }

// ___________________________________Prctical No.5 ________________________________
// let j = Number(prompt("Enter the First Number"));
// let k = Number(prompt("Enter the Second Number"));
// if(j > k){
//     console.log(j + " is Greater than " + k);
// } else if (k > j){
//     console.log(k + " is Greater than " + j);
// } else{
//     console.log("Both Number are Equal");
// }

// ___________________________________Prctical No.7 ________________________________
let user = "Aditya";
let pass = "123";
let check = prompt("Enter Username"); 
let checkpass = prompt("Enter Password"); 
if (check === user && checkpass === pass) { 
    console.log("Successfully Logged In"); 
} else if (check !== user && checkpass === pass) { 
    console.log("Username is wrong"); 
} else if (check === user && checkpass !== pass) { 
    console.log("Password is wrong"); 
} else { 
    console.log("Username and Password are wrong"); 
}