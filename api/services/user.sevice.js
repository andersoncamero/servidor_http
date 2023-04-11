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
        const obj = Object.fromEntries(dividirCadena(data, ":"));
        console.log(obj);
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

    dividirCadena(cadenaADividir,separador) {
        const arrayDeCadenas = cadenaADividir.split(separador);
        for (let i=0; i < arrayDeCadenas.length; i++) {
            document.write(arrayDeCadenas[i] + ",");
         }
    }
}

module.exports = UserService