const { Model, DataTypes, Sequelize } = require('sequelize')

const METER_TABLE = 'meter'

const MeterSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    serial:{
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    variables: {
        allowNull: false,
        type: DataTypes.ARRAY
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