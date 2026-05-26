const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`succesfully server run on 3000`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Aditya</h1>");
});

app.get("/user/:userid", (req, res) => {
  res.send(`<h1>This is user id: ${req.params.userid}</h1>`);
});
