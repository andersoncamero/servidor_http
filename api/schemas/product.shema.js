const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)
const description = Joi.string().min(10)
const imgen = Joi.string().uri()
const categoryId = Joi.number().integer()
const limit =Joi.number().integer()
const offset = Joi.number().integer()

const pricemin = Joi.number().integer()
const pricemax = Joi.number().integer()

const createProdutSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    imgen: imgen.required(),
    description: description.required(),
    categoryId : categoryId.required()
})

const updataProdutSchema = Joi.object({
    name: name,
    price: price,
    imgen: imgen,
    descrption: description,
    categoryId
})

const getProdutSchema = Joi.object({
    id: id.required(),
})

const queryProdutSchema = Joi.object({
    limit,
    offset,
    price,
    pricemin,
    pricemax: pricemax.when('pricemin',{
        is: Joi.number().integer(),
        then: Joi.required()
    })
})
module.exports = {queryProdutSchema, createProdutSchema, updataProdutSchema, getProdutSchema}