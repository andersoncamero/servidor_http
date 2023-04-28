const express = require('express')
const productService = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const {createProdutSchema, updataProdutSchema, getProdutSchema, queryProdutSchema}=require('../schemas/product.shema')

const router = express.Router()
const service = new productService()

router.get('/filter', (req,res)=>{
    res.send('soy un filter')
})
router.get('/', 
validatorHandler(queryProdutSchema, 'query'),
async (req, res, next)=>{
    try {
        const product = await service.find(req.query)
        res.json(product)
    } catch (error) {
        next(error)
    }
   
 })

 router.get('/:id', 
    validatorHandler(getProdutSchema, 'params'),
    async (req,res, next)=>{
        try {
            const { id } = req.params
            const product = await service.findOne(id)
            res.json(product)
        } catch (error) {
            next(error)
        }
   
})

router.post('/' ,
    validatorHandler(createProdutSchema, 'body'),
    async (req, res)=>{
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json({ newProduct})
    })

router.patch('/:id' , 
    validatorHandler(getProdutSchema, 'params'),
    validatorHandler(updataProdutSchema, 'body'),
    async (req, res, next)=>{
    try {
        const { id } = req.params
        const body = req.body
        const product = await service.update(id, body)
        res.json({ product })
    } catch (error) {
        next(error)
    }
    
})
router.delete('/:id' , async (req, res)=>{
    const { id } = req.params
    const product = await service.delete(id)
    res.json({ product })
})
module.exports = router;



