const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string().alphanum().min(3).max(15)
const price = Joi.number().integer().min(10)
const description = Joi.string().min(10)
const imagen = Joi.string().uri()

const createProdutSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    imagen: imagen.required(),
    descrption: description.required()
})

const updataProdutSchema = Joi.object({
    name: name,
    price: price,
    imagen: imagen,
    descrption: description
})

const getProdutSchema = Joi.object({
    id: id.required(),
})

module.exports = {createProdutSchema, updataProdutSchema, getProdutSchema}