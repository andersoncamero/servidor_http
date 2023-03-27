const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)

const createProdutSchema = Joi.object({
    name: name.required(),
    price: price.required()
})

const updataProdutSchema = Joi.object({
    name: name,
    price: price
})

const getProdutSchema = Joi.object({
    id: id.required(),
})

module.exports = {createProdutSchema, updataProdutSchema, getProdutSchema}