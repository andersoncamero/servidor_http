const Joi = require ('joi')


const id = Joi.number().integer()
const custumerId = Joi.number().integer()
const oderId = Joi.number().integer()
const productId = Joi.number().integer()
const amount = Joi.number().integer().min(1)


const getOrderSchema = Joi.object({
    id: id.required()
})

const creatOrderSchema = Joi.object({
    custumerId: custumerId.required()
})

const addItemSchem = Joi.object({
    oderId: oderId.required(),
    productId: productId.required(),
    amount: amount.required()
})
module.exports = {getOrderSchema,creatOrderSchema,addItemSchem}