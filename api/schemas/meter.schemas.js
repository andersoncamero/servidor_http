const Joi = require('joi')

const id = Joi.string()
const variables = Joi.array()


const createMeterSchema = Joi.object({
    id: id.required(),
    variables: variables.required()
})

const updateMeterSchema = Joi.object({
    id: id,
    variables: variables
})

const getMeterSchema = Joi.object({
    id: id.required(),
})

module.exports = { createMeterSchema, updateMeterSchema, getMeterSchema}

