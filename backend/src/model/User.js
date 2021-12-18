const { usuarios: model } = require("../database/models");
const db = require("../database/models");

const UserModel = {
  findAll: async () => {
    try {

      let results = await model.findAll({
        include: [
          {
            model: db.post,
            as: "posts",
          },
        ],
      });
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (data) => {
    try {
      let results = await model.create(data);
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  delete: async (id) => {
    try {
      let results = await model.destroy({ where: { id: id } });
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
  update: async (id, data) => {
    try {
      let results = await model.update(data, { where: { id: id } });
      return results;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = UserModel;



