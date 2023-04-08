const express = require('express')
const productsRouter = require('./poducts.router')
const UsersRouter = require('./users.router')
const CustomerRouter = require('./customer.router')
const MeterRouter = require('./meter.routes')
const CategoryRouter = require('./category.router')


function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productsRouter)
    router.use('/categories', CategoryRouter)
    router.use('/users', UsersRouter)
    router.use('/customers', CustomerRouter)
    router.use('/meter', MeterRouter)
}

module.exports = routerApi