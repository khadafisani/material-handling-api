"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("material_requests", "requester_name", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "-",
      after: "id",
    });

    await queryInterface.changeColumn("material_requests", "created_by", {
      type: Sequelize.BIGINT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("material_requests", "requester_name");

    /**
     * We cant revert created_by column to not null
     * to prevent migration error if there is row with null created_by value
     */
  },
};
