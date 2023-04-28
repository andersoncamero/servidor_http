const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./order.model')
const { PRODUCT_TABLE } = require('./product.models')

const ORDER_PRODUCTS_TABLE = 'order_products';

const Order_ProductSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    amount:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    oderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        References:{
            module:ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        References:{
            module:PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Order_Product extends Model{
    static associate(models) {
    
      }

    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_PRODUCTS_TABLE,
            moduleName: 'OrderProduct',
            timestamps: false
        }
    }
}

module.exports = {Order_Product, Order_ProductSchema, ORDER_PRODUCTS_TABLE}