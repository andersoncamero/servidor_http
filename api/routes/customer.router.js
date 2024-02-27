const express = require('express')
const CustomerService = require('../services/customer.service')
const validationHandler = require('../middlewares/validator.handler')
const { getCustomerSchema, createCustomerSchema, updateCustomerSchema } = require('../schemas/customer.schemas')

const router = express.Router()
const service = new CustomerService()

router.get('/', async (req, res, next) => {
  try {
    const user = await service.find()
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const category = await service.findOne(id)
      res.json(category)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  })

router.patch('/:id',
  validationHandler(updateCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error)
    }
  })
router.delete('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router

