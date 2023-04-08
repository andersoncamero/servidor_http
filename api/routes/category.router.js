const express = require('express')
const CategoryService = require('../services/category.service')
const validatorHandler = require('../middlewares/validator.handler')
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('./../schemas/category.schemas')

const router = express.Router()
const service = new CategoryService()

router.get('/', async(req, res, next)=>{
    try {
        const category = await service.find()
        res.json(category)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', 
validatorHandler(getCategorySchema, 'params'), 
async(req,res,next)=>{
    try {
        const { id } = req.params
        const category = await service.findOne(id)
        res.json(category)
    } catch (error) {
        next(error)
    }
})

router.post('/', 
validatorHandler(createCategorySchema, 'body'),
async (req,res,next)=>{
    try {
        const body = req.body
        const newcategory = await service.create(body)
        res.status(201).json(newcategory)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id',validatorHandler(getCategorySchema, 'param'),
validatorHandler(updateCategorySchema, 'body'), async(req, res, next)=>{
    try {
        const {id}= req.params
        const body = req.body
        const category = await service.update(id,body) 
        res.json(category)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', validatorHandler(getCategorySchema,'param'), 
async (req, res, next)=>{
    try {
        const {id} = req.params
        await service.delete(id)
        res.status(201).json(id)
    } catch (error) {
        next(error)
    }
})

module.exports = router