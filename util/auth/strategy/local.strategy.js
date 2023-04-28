const {Strategy} = require('passport-local')
const boom = require('@hapi/boom')
const AuhService = require('./../../../api/services/auth.service')
const bcrypt = require('bcrypt')
// const { use } = require('passport')

const service = new AuhService()

const localStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},async (email, password, done)=>{
try {
    const user = await service.getUser(email, password)
    done(null, user)
    } catch (error) {
        done(error,false)
    }
})

module.exports = localStrategy 