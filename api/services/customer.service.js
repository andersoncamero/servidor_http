const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')
const bcrypt = require('bcrypt')

class CustomerService{

    constructor(){}

    async find(){
        const rta = await models.Customer.findAll({include:['user']})
        return rta
    }

    async findOne(id){
        const user = await models.Customer.findByPk(id)
        if (!user) {
            throw boom.notFound('cunstomer not found')
        }
        return user
    }

    async create(data){
        const hash = await bcrypt.hash(data.user.password, 10)
        const newDate = {
            ...data,
            user:{
                ...data.user,
                password: hash
            }
        }
        const newcustumer = await models.Customer.create(newDate,{
            include:['user']
        })
        delete newcustumer.dataValues.user.dataValues.password
        return newcustumer
    }

    async update(id, changes){
        const model = await this.findOne(id)
        const rta = await model.update(changes)
        return rta
    }
    async delete(id){
        const model = await this.findOne(id)
        await model.destroy()
        return {rta: true}
    }
}

module.exports=CustomerService
