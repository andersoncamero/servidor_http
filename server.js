const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.text())
let dato = ''

app.get('/medidor/:id', (req,res)=>{
    console.log('serial del medidor: ',req.params.id);
    res.status(200).send("ping")
})

app.post('/consulta/:id', (req,res)=>{
    res.status(201).send("inicia peticion de datos del medidor")
    console.log(req.body);
})

app.post('/tramas/:id', (req,res)=>{
    console.log('serial del medidor: ', req.params.id)

    let today = new Date();
    let now = today.toLocaleString()
    let datos = req.body;
    console.log(JSON.stringify(datos)+"tiempo: "+ now);
    res.status(202).send("dato recibido")
    
})

app.listen(PORT, ()=>{
    console.log('servido en el puerto: ' + PORT);
})