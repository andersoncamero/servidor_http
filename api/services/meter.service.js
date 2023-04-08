const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')



class MeterService{

    constructor(){
        this.datos = []
    }

    async find(){
        const rta  = await models.Meter.findAll()
        return rta
    }

    async findOne(id){
        const user = await models.Meter.findByPk(id)
        if (!user) {
           throw boom.notFound('user not found')
        }
      return user 
    }

    async create(ID ,data, dateToday){
            const newUser = {
                seri: ID ,
                ...data,
                dateToday:dateToday
            }
            this.datos.push(newUser)
            return newUser
        }

}

module.exports = MeterService