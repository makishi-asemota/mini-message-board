const express = require("express");
const { appendFile } = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Load View Engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Howdy Dude!",
    user: "Markus",
    added: new Date(),
  },
];

/* GET home page. */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* GET new form. */
app.get("/new", function (req, res) {
  res.render("form");
});

/* POST new submission */
app.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.input,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

//start server
app.listen(3100, function () {
  console.log("Server started on port 3100...");
});

module.exports = app;
