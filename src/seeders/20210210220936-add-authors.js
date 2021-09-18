"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Agatha Christie",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Suzanne Collins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "J.K Rowling",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "George Orwell",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Edgar Allan Poe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("authors", null, {});
  },
};
