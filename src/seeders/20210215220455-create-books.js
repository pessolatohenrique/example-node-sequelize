"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "books",
      [
        {
          name: "Morte no Nilo",
          pages: 210,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Os trabalhos de Hércules",
          pages: 288,
          authorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jogos Vorazes",
          pages: 321,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Em Chamas",
          pages: 335,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "A Esperança",
          pages: 390,
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("books", null, {});
  },
};
