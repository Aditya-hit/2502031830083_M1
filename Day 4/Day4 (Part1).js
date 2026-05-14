// ______________________________________InnerHTML Example___________________________________________
document.getElementsByClassName("food")[0].innerHTML = "I Love Javascript!"
document.getElementById("snacks").innerHTML = "Javascript is easy to use!";

// ______________________________________Variable and Variable Declaration Example___________________________________________
let x = 10;
let y = 5;
let z = x + y;
let a = x - y;
let b = x * y;
let c = x / y;

document.getElementsByClassName("sum")[0].innerHTML = "Value Of Z is : " + z;
document.getElementsByClassName("sum")[1].innerHTML = "Value Of A is : " + a;
document.getElementsByClassName("sum")[2].innerHTML = "Value Of B is : " + b;
document.getElementsByClassName("sum")[3].innerHTML = "Value Of C is : " + c;

let k = true;
console.log(typeof k);  