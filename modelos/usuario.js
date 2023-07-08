var Sequelize = require("sequelize");

module.exports = function(conexion) {
  var UsuarioSchema = conexion.define('usuario', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    usuario: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return UsuarioSchema;
};