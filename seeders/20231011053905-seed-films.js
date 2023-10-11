"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Films",
      [
        {
          name: "Film Satu",
          desc: "film pertama ini",
          year: "2023",
          author: "GW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Film dua",
          desc: "film kedua ini",
          year: "2023",
          author: "GW GW",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
