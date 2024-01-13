'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Orders extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Orders.belongsTo(models.Users, {
                foreignKey: 'idUser', targetKey: 'id',
                as: 'idUserData'
            })

            Orders.belongsTo(models.Product, {
                foreignKey: 'idProduct', targetKey: 'id',
                as: 'idProductData'
            })
        }
    };
    Orders.init({

        idUser: DataTypes.STRING,
        idProduct: DataTypes.STRING,
        amount: DataTypes.STRING,
        price: DataTypes.STRING,
        address: DataTypes.STRING,

        status: DataTypes.STRING,

        email: DataTypes.STRING,
        token: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Orders',
        freezeTableName: true
    });
    return Orders;
};