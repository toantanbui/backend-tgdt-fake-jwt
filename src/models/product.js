'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Product.hasMany(models.Orders, { foreignKey: 'idProduct', as: 'idProductData' })

        }
    };
    Product.init({


        KeyProduct: DataTypes.STRING,
        NameProduct: DataTypes.STRING,
        Screen: DataTypes.STRING,
        OperatingSystem: DataTypes.STRING,
        RAM: DataTypes.STRING,
        Capacity: DataTypes.STRING,
        Battery: DataTypes.STRING,
        Image: DataTypes.STRING,
        Price: DataTypes.STRING,
        DetailInfor: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Product',
        freezeTableName: true
    });
    return Product;
};