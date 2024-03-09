"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Aceh Gayo",
          type: "Coffee",
          price: 10000,
          stock: 10,
          image: "http://sampleimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toraja Roast",
          type: "Coffee",
          price: 15000,
          stock: 10,
          image: "http://sampleimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Capucino",
          type: "Coffee",
          price: 12000,
          stock: 10,
          image: "http://sampleimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beef Burger",
          type: "Western",
          price: 20000,
          stock: 10,
          image: "http://sampleimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pizza",
          type: "Western",
          price: 25000,
          stock: 10,
          image: "http://sampleimage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
