const express = require('express')
const cors = require('cors')
const routerApi = require('../api/routes/index')
const useGraphgl = require('./graphql')
const { logErrors, errorHandler, boomerrorHandler, ormErrorHandler } = require('./middlewares/error.handler')
const { checkApikey } = require('./middlewares/auth.handler')


const createApp = async () => {
  const app = express()

  app.use(express.json())
  app.use(express.text())
  require('./../util/auth')

  const whitelist = ['http//localhost:3001', 'https//myapp.co','http://127.0.0.1:5500']
  const option = {
      origin:(origin, callback) =>{
          if(whitelist.includes(origin)|| !origin){
              callback(null, true)
          }else{
              callback(new Error('no permitido'))
          }
      },
      methods: ['GET', 'PUT', 'POST', 'DELETE'],
      allowedHeaders: ['Accept', 'Content-Type', 'authorization', 'Content-Disposition', 'Access-Control-Allow-Origin'],
  }
  app.use(cors(option))

  routerApi(app);
  await useGraphgl(app)

  app.use(logErrors)
  app.use(ormErrorHandler)
  app.use(boomerrorHandler)
  app.use(errorHandler)

  app.get('/nueva_ruta', checkApikey, (req, res) => {
    res.status(201).send("inicia peticion de datos del medidor")
    console.log(req);
  })
  return app
}

module.exports = createApp
