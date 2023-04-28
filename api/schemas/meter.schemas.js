const Joi = require('joi')

const id = Joi.number().integer()
const serial = Joi.number().integer()
const project = Joi.string().alphanum()
const variables = Joi.object()


const createMeterSchema = Joi.object({
    serial: serial.required(),
    project: project.required()
})

const updateMeterSchema = Joi.object({
    id: id,
    variables: variables
})

const getMeterSchema = Joi.object({
    id: id.required(),
})

module.exports = { createMeterSchema, updateMeterSchema, getMeterSchema}

