const { Model, DataTypes, Sequelize } = require('sequelize')

const METER_TABLE = 'meter'

const MeterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      project:{
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: false
    },
    serial:{
        allowNull: false,
        type: DataTypes.NUMBER,
        unique: true
    },
    model:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    },
    TransformadorCorriente:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: false
    },
    relationTC:{
        allowNull: false,
        type: DataTypes.NUMBER,
        unique: false
    },
    alias:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    createdAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
    }, 
}

class Meter extends Model {
    static associate() {
    }

    static config( sequelize ){
        return{
            sequelize,
            tableName: METER_TABLE,
            modelName: 'Meter',
            timestamps: false
        }
    }

}

module.exports = { METER_TABLE, MeterSchema, Meter }