// ____________________________________Array Example__________________________________
// let car = new Array(3);
// car[0] = "Ford";
// car[3] = "Audi";
// car[2] = "Pagani";

// let car2 = new Array("Ford","Audi","Pagani");
// let car3 =  ["Aston martin", "Bently", "Ferrari"];
// document.write(car2 +"<br>");
// car2.push("Mazda");
// document.write(car2 +"<br>");
// car2.pop();
// document.write(car2 +"<br>");
// let data = car2.concat(car3);
// document.write(data);

// ____________________________________Function Example__________________________________
// function foo(p1) {
//     if (typeof p1 === "number")return 0;
//     else if (typeof p1 === "string") return "zero";
// }
// console.log(foo(1));
// console.log(foo("abc"));
// console.log(foo());

// ____________________________________Function Example No.2__________________________________
// function sum() {
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     s += arguments[i];
//   }
//   return s;
// }
// var a = sum(1, 2, 3);
// var a = sum(1, 2, 3, 4, 5);
// var a = sum(1, 2, "3", 4, 5);
// document.write(a);

// ____________________________________String Example__________________________________
let text = " Hello JavaScript ";
let text2 = "JavaScript";
let msg = "cat dog cat";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(1));
console.log(text.indexOf("Java"));
console.log(text.lastIndexOf("a"));
console.log(text.includes("Java"));
console.log(text.trim().startsWith("Hello"));
console.log(text.trim().endsWith("JavaScript"));
console.log(text.slice(1, 6));
console.log(text.substring(1, 6));
console.log(text.substr(1, 5));
console.log(text.replace("Hello", "Hi"));
console.log(msg.replaceAll("cat", "lion"));
console.log(text.trim());
console.log(text.valueOf());
console.log(text.search("Java"));
console.log("apple".localeCompare("banana"));