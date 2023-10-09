const { faker } = require("@faker-js/faker")
const boom = require('@hapi/boom')
const { models} = require('../libs/sequelize')
const{ Op }= require('sequelize')




class productService{

     constructor(){

    }
    async create(data){
      const category = await models.Category.findByPk(data.categoryId)
      if (!category) {
        throw boom.notFound('category not found')
      }
        const newProduct = await models.Product.create(data)
        return newProduct
    }
    async find(query){
        const options = {
            include: ['category'],
            where:{}
        }
        const {limit , offset } = query
        if(limit && offset){
            options.limit = limit
            options.offset = offset
        }
        const {price} = query
        if (price) {
            options.where.price = price
        }
        const {pricemin, pricemax} = query
        if (pricemin && pricemax ) {
            options.where.price = {
                [Op.gte]: pricemin,
                [Op.lte]: pricemax
            }
        }
        const product = await models.Product.findAll(options)
        return product
    }

    async findOne(id){
      console.log(id);
        const product = await models.Product.findByPk(id,{
          include: ['category']
        })
        if(!product){
            throw  boom.notFound('produt not found')
        }
        return product
    }
    async update(id, changes){
        const products = await this.findOne(id)
        const rta = await products.update(changes)
        return rta;
    }
    async delete(id){
        const products = await this.findOne(id)
        await products.destroy(id);
        return  id ;
    }

}
module.exports = productService
