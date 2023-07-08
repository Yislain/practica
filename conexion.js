var Sequelize = require("sequelize");
var UsuarioModelo = require("./modelos/usuario");

var conexion = new Sequelize('tio2', 'root', '', {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

var Usuario = UsuarioModelo(conexion);

conexion.sync({ force: false })
  .then(() => {
    console.log("Conectado a MySQL");
  })
  .catch((err) => {
    console.log("Error al conectarse a MySQL", err);
  });

module.exports = {
  Usuario: Usuario
};
