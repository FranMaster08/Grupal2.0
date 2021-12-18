const { post: model } = require("../database/models");

const PostModel = {
  findAll: async () => {
    try {
      let results = await model.findAll();
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



module.exports = PostModel;

