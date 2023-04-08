const express = require('express')
const MeterService = require('../services/meter.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getMeterSchema, createMeterSchema, updateMeterSchema } = require('../schemas/meter.schemas')

const router = express.Router()
const service = new MeterService()


router.get('/', async (req, res, next)=>{
    try {
        const meter = await service.find()
        res.json(meter)
    } catch (error) {
        next(error)
    }
})


router.get('/:id', async (req, res, next)=>{
    try {
        const meter = await service.findOne(id)
        res.json(meter)
    } catch (error) {
        next(error)
    }
})

router.post('/tramas/:id', async (req, res)=>{
    const body  = req.body;
    const { id } = req.params
    const  dateToday = new Date().toLocaleString();
    const medidor = service.create(id, body, dateToday);
    res.status(201).json({ medidor})
})

module.exports = router 