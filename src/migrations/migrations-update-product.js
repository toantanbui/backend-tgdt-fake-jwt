module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Product', 'Image', {
                type: Sequelize.BLOB('long'),
                allowNull: true,

            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Product', 'Image', {
                type: Sequelize.STRING,
                allowNull: true,

            })
        ])
    }
};