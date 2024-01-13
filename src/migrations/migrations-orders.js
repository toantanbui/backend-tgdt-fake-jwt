'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idUser: {
                type: Sequelize.STRING
            },
            idProduct: {
                type: Sequelize.STRING
            },
            amount: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },

            status: {
                type: Sequelize.STRING
            },

            email: {
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
        await queryInterface.dropTable('Orders');
    }
};