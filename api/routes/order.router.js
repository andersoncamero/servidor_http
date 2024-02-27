const express = require('express')
const OrderService = require('../services/order.service')
const validatorHandler = require('../middlewares/validator.handler')
const { creatOrderSchema, getOrderSchema, addItemSchem } = require('../schemas/order.schemas')

const router = express.Router()
const service = new OrderService()



router.get('/', async (req, res, next) => {
  try {
    const Order = await service.find()
    res.json(Order)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const Order = await service.findOne(id)
      res.json(Order)
    } catch (error) {
      next(error)
    }
  })



router.post('/',
  validatorHandler(creatOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newOrder = await service.create(body)
      res.status(201).json(newOrder)
    } catch (error) {
      next(error)
    }
  })

router.post('/add-item',
  validatorHandler(addItemSchem, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newItem = await service.addItem(body)
      res.status(201).json(newItem)
    } catch (error) {
      next(error)
    }
  })
module.exports = router
