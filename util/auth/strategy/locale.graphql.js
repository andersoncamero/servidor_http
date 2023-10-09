const { GraphQLLocalStrategy } = require('graphql-passport')
const AuhService = require('./../../../api/services/auth.service')

const service = new AuhService()

const GQLlocalStrategy = new GraphQLLocalStrategy(
  async(email, password, done)=>{
  try {
    const user = await service.getUser(email, password)
    done(null, user)
    } catch (error) {
        done(error,false)
    }
})

module.exports = GQLlocalStrategy
