const express = require('express')
const productsRouter = require('./poducts.router')
const UsersRouter = require('./users.router')
const CustomerRouter = require('./customer.router')
const MeterRouter = require('./meter.routes')
const CategoryRouter = require('./category.router')
const OrderRouter = require('./order.router')
const authRouter = require('./auth.router')
const profileRouter = require('./profile.router')


function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productsRouter)
    router.use('/categories', CategoryRouter)
    router.use('/users', UsersRouter)
    router.use('/customers', CustomerRouter)
    router.use('/meter', MeterRouter)
    router.use('/Order', OrderRouter)
    router.use('/Auth', authRouter)
    router.use('/profile', profileRouter)
}

module.exports = routerApi