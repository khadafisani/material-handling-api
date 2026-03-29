"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("material_request_details", "quantity", {
      type: Sequelize.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("material_request_details", "quantity", {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    });
  },
};
