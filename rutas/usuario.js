var ruta = require("express").Router();
var Usuario = require("../conexion");

ruta.get("/", (req, res) => {
  res.render("inicio");
});

module.exports = ruta;
