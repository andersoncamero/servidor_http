const passport = require('passport')

const localStrategy = require('./strategy/local.strategy')
const JwtStrategy = require('./strategy/jwt.strategy.js')
const localGraphql = require('./strategy/locale.graphql')


passport.use(localStrategy)
passport.use(JwtStrategy)
passport.use(localGraphql)

