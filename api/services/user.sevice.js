const { faker } = require("@faker-js/faker")
const boom = require('@hapi/boom')

class UserService {
    constructor(){
        this.users = []
        this.datos = []
        this.find()
        this.generate()
    }

    async generate(limit, offset){
        if (limit && offset) {
           this.users.push({'limit':limit, 'offset':offset})
            return this.users
        }else{
           return {limit:'no hay parametros', offset:'no hay parametros'}
        }
    }
    async create(ID ,data, dateToday){
        for (let i = 0; i < data.length; i++) {
            let arr = data[i].split(':')
            data[i] = {"alias": arr[0], "value": arr[1]}
        }
        const newUser = {
            serial: ID,
            variables: data,
            dateToday:dateToday
        }
        this.datos.push(newUser)
        return newUser
    }

    async find(){
        return this.datos
    }
}

module.exports = UserService