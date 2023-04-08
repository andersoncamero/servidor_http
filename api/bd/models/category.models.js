const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'Category'

const CategorySchemsa = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}

class Category extends Model{
    static associate(models) {
        this.hasMany(models.Product,{
            as: 'products',
            foreignKey: 'categoryId'
        })
      }

    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            moduleName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {Category, CategorySchemsa, CATEGORY_TABLE}