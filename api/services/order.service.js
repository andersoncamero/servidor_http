const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')





class OrderService {
    constructor(){
    }
    async create(data){
        const newOrder = await models.Order.create(data)
        return newOrder
    }

    async addItem(data){
        const newItem = await models.Order_Product.create(data)
        return newItem
    }
    async find(){
        const order = await models.Order.findAll()
        return order
    }

    async findbyUser(userId){
        console.log(userId);
        const order = await models.Order.findAll({
            where: {
                '$custumer.user.id$': userId
            },
            include: [{
                association: 'custumer',
                include: ['user']
            }
        ]
        })
        return order
    }
    async findOne(id){
    const order = await models.Order.findByPk(id, {
        include: [{
            association: 'custumer',
            include: ['user']
        },
        'items'
    ]
    })
       return order
    }
    async update(id, changes) {
       return{
        id,
        changes
       }
      }
    
      async delete(id) {
        return  id ;
      }

}

module.exports = OrderService