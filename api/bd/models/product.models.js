const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.models')
const PRODUCT_TABLE = 'Product'

const ProductSchemsa = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    imgen:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        References:{
            module:CATEGORY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Product extends Model{
    static associate(models) {
        this.belongsTo(models.Category,{as: 'category' })
      }

    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            moduleName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {Product, ProductSchemsa, PRODUCT_TABLE}