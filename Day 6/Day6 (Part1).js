// ______________________________Vlidation Form___________________________
// function validate() {
//     var form1 = document.getElementById("RegForm");

//     var name = form1.Name.value;
//     var email = form1.Email.value;
//     var phone = form1.Telephone.value;
//     var what = form1.Subject;
//     var password = form1.Password.value;

//     var regEmail = /^\S+@\S+\.\S+$/;
//     var regPhone = /^\d{10}$/;

//     if (name == "") {
//         alert("Please Enter Your Name");
//         return false;
//     }
//     else if (email == "" || !regEmail.test(EMail)) {
//         alert("Please Enter a valid Email Address");
//         return false;
//     }
//     else if (password == "") {
//         alert("Please Enter Your Password");
//         return false;
//     }
//     else if (password.length < 6) {
//         alert("Password should be at least 6 characters long");
//         return false;
//     }
//     else if (phone == "" || !regPhone.test(phone)) {
//         alert("Please Enter Valid Phone Number");
//         return false;
//     }
//     else if (what.selectedIndex == 0) {
//         alert("Please Select Your Course");
//         return false;
//     }

//     return true;
// }

let product = document.getElementById("product");
let qunatity = document.getElementById("quantity");
let amount = document.getElementById("amount");
let prize = document.getElementById("prize");

product.addEventListener("change", () => {
  prize.value = product.value;
});

amount.addEventListener("focus", () => {
  amount.value = product.value * qunatity.value;
});