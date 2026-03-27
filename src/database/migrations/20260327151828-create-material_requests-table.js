"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("material_requests", {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
      },
      created_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_by: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      deleted_by: {
        type: Sequelize.BIGINT,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("material_requests");
  },
};
