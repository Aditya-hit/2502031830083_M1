const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`succesfully server run on 3000`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello Aditya</h1>");
// });

// app.get("/user/:userid", (req, res) => {
//   res.send(`<h1>This is user id: ${req.params.userid}</h1>`);
// });

// app.get("/search", (req, res) => {
//   const name = req.query.name;
//   const age = req.query.age;
//   res.send(`Search result for name: ${name} and age: ${age}`);
// });


// app.get('/', (req,res) => {
//   res.send(
//    {
//     name : "Aditya",
//     age : 20
//    } 
//   )
// })

// app.get('/', (req,res) => {
//   res.send(
//     ['Apple', 'Mango', 'Cherry']
//   )
// })

// app.get('/', (req,res) => {
//   res.send(
//     {name : "Aditya", age : 20}
//   )
// })

// app.get('/', (req,res) => {
//   const users = [
//       {id: 1, name : 'Aditya'},
//       {id: 2, name : 'Priyansh'}
//   ]
//   res.json(users)
// })

// app.get('/', (req,res) => {
//   res.jsonp({name : 'Aditya', age : 20})
// })

// app.get('/about', (req,res) => {
//   res.redirect(301,'https://google.com');
// })

// app.get('/user', (req,res) => {
//   res.send("<h1>Hello Everyone</h1>");
// })

app.set('view engine', 'ejs')

app.get('/user', (req,res) => {
  res.render('user')
})
