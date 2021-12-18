const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    articulo1: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    articulo2: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    articulo3: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    usuariosId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_post_usuarios_idx",
        using: "BTREE",
        fields: [
          { name: "usuariosId" },
        ]
      },
    ]
  });
};
