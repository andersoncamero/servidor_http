const express = require('express')
const cors = require('cors')
const routerApi = require('./routes/index')
const{logErrors, errorHandler, boomerrorHandler}=require('./api/middlewares/error.handler')
const app = express()
const PORT = process.env.PORT || 8080

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
app.use(boomerrorHandler)
app.use(errorHandler)


app.get('/medidor/:id', (req,res)=>{
    console.log('serial del medidor: ',req.params.id);
    res.status(200).send("ping")
})

app.post('/consulta/:id', (req,res)=>{
    res.status(201).send("inicia peticion de datos del medidor")
    console.log(req);
})

app.post('/tramas/:id', (req,res)=>{
    console.log('serial del medidor: ', req.params.id)
    let today = new Date();
    let now = today.toLocaleString()
    let datos = req.body;
    let variables = JSON.stringify(datos)+"tiempo: "+ now
    console.log(variables);
    res.status(202).send("dato recibido")
})

app.listen(PORT, ()=>{
    console.log('servido en el puerto: ' + PORT);
})