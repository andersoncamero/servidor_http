const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { loadFilesSync } = require('@graphql-tools/load-files')
const {buildContext} = require('graphql-passport')
const {typeDefs: scalarTypeDefs, resolvers: scalarsResolver} = require('graphql-scalars')
const resolvers = require('./resolvers')


const useGraphgl = async (app) => {
  const typeDefs =[
    ... await loadFilesSync(path.join(__dirname,'./schema.graphql')),
    scalarTypeDefs
  ]
  const allResolvers = [
    resolvers,
    scalarsResolver
  ]
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    context: ({req, res})=> buildContext({req,res}),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })
  await server.start()
  server.applyMiddleware({ app })
}

module.exports = useGraphgl


