const jwt = require('jsonwebtoken')


const secret = 'myCat'
const  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MTg0MzY2M30.zGMRI6Va-aGmo9DBI1srWv9DvAWC8IzlPQpkTTJWdP4'


function verifyToken(token, secret){
    return jwt.verify(token, secret)
}


const payload = verifyToken(token, secret)

console.log(payload);