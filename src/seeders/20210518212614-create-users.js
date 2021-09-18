"use strict";
const bcrypt = require("bcrypt");
const ROUNDS_BCRYPT = 12;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "pessolatohenrique",
          email: "pessolatohenrique@gmail.com",
          password: await bcrypt.hash("admin@123", ROUNDS_BCRYPT),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "exemplousuario",
          email: "exemplousuario@gmail.com",
          password: await bcrypt.hash("admin@123", ROUNDS_BCRYPT),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
