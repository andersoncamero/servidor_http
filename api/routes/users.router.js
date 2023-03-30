const express = require('express')
// const {faker} = require('@faker-js/faker')
const {faker} = require('@faker-js/faker')
const UserService = require('../services/user.sevice')

const router = express.Router()
const service = new UserService()


router.get('/', async (req, res)=>{
    const datos = await service.find()
    res.json(datos)
 })

router.get('/medidor/:id', async (req, res)=>{
    const {limit, offset} = req.query
    const users = await service.generate(limit, offset)
    res.json(users)
})


router.post('/tramas/:id', async (req, res)=>{
    const body  = req.body;
    const { id } = req.params
    const  dateToday = new Date().toLocaleString();
    const medidor = service.create(id, body, dateToday);
    res.status(201).json({ medidor})
})


module.exports = router