const  boom = require('@hapi/boom')
const UserService = require('./user.service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer")

const { config } = require('./../config/config')
const service = new UserService()

class AuthService {

  async getUser(email, password){
    const user = await service.findEmail(email)
    if(!user){
        throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw boom.unauthorized();
    }
    delete user.dataValues.password
    delete user.dataValues.email
    return(user)
    }

  signToken(user){
    const payload = {
        sub: user.id,
        role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret)
    return({
        user,
        token
    })
  }

  async changePassword(token, newPassword){
    try {
      const payload = jwt.verify(token, config.jwtSecret)
      const user = await service.findOne(payload.sub)
      if (user.recoveryToken !== token) {
        throw boom.unauthorized()
      }
      const hash = await bcrypt.hash(newPassword, 10)
      await service.update(user.id,{recoveryToken: null, password: hash})
      return { menssage: 'password changed'}
    } catch (error) {
      throw boom.unauthorized()
    }

  }

  async sendRecovery(email){
    const user = await service.findEmail(email)
    if(!user){
        throw boom.unauthorized();
    }
    const payload = {sub: user.id}
    const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'})
    const link =`http://myfrontend.com/recobery?token${token}`
    await service.update(user.id,{recoveryToken: token})
    const mail ={
      from: config.SmtpEmail, // sender address
        to: `${user.email}`, // list of receivers
        subject: "email para recuperar contaseña", // Subject line
        text: "Hello world?", // plain text body
        html: `<b> ingresa a este link => ${link} </b>`, // html body
    }

    const rta = await this.sendMail(mail)
    return rta
  }
 async sendMail(infoemail){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true, // true for 465, false for other ports
        port: 465,
        auth: {
            user: config.SmtpEmail,
            pass: config.SmtpPassword
        }
      });
      await transporter.sendMail(infoemail);
      return { menssage: 'todo salio bien '}
  }
}
  module.exports = AuthService
