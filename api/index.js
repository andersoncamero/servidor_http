const express = require('express')
const cors = require('cors')
const routerApi = require('../api/routes/index')
const{logErrors, errorHandler, boomerrorHandler, ormErrorHandler}=require('./middlewares/error.handler')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.text())
const whitelist = ['http//localhost:8080', 'https//myapp.co']
const option = {
    origin:(origin, callback) =>{
        if(whitelist.includes(origin)|| !origin){
            callback(null, true)
        }else{
            callback(new Error('no permitido'))
        }
    }
}
app.use(cors(option))

routerApi(app);

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomerrorHandler)
app.use(errorHandler)

app.post('/consulta/:id', (req,res)=>{
    res.status(201).send("inicia peticion de datos del medidor")
    console.log(req);
})

app.listen(PORT, ()=>{
    console.log('servido en el puerto: ' + PORT);
})