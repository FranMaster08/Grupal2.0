var DataTypes = require("sequelize").DataTypes;
var _post = require("./post");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var post = _post(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  post.belongsTo(usuarios, { as: "usuario", foreignKey: "usuariosId"});
  usuarios.hasMany(post, { as: "posts", foreignKey: "usuariosId"});

  return {
    post,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
