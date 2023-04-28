const passport = require('passport')

const localStrategy = require('./strategy/local.strategy')
const JwtStrategy = require('./strategy/jwt.strategy.js')

passport.use(localStrategy)
passport.use(JwtStrategy)

