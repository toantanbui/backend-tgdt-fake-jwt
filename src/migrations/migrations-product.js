'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            KeyProduct: {
                type: Sequelize.STRING
            },
            NameProduct: {
                type: Sequelize.STRING
            },
            Screen: {
                type: Sequelize.STRING
            },
            OperatingSystem: {
                type: Sequelize.STRING
            },
            RAM: {
                type: Sequelize.STRING
            },
            Capacity: {
                type: Sequelize.STRING
            },
            Battery: {
                type: Sequelize.STRING
            },
            Image: {
                type: Sequelize.STRING
            },
            Price: {
                type: Sequelize.STRING
            },
            DetailInfor: {
                type: Sequelize.STRING
            },




            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Product');
    }
};