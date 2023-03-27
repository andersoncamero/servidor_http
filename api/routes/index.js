const express = require('express')
const productsRouter = require('./poducts.router')
const UsersRouter = require('./users.router')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/products', productsRouter)
    router.use('//users', productsRouter)
}

module.exports = routerApi