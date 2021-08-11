const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require('dotenv').config()

const port = process.env.PORT || 3000;

const info = {
    titulo: "Curso de Node ",
    nombre: "César Pintos",
}
// SERVIR CONTENIDO PUBLICO

app.use(express.static(path.join(__dirname, "public")));

// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("home", info);
});
app.get("/elements", (req, res) => {
  res.render("elements", info);
});
app.get("/generic", (req, res) => {
  res.render("generic", info);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/404.html"));
});
