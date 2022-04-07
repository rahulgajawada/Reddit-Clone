const { ApolloServer } = require('apollo-server') 
const { resolvers, typeDefs } = require('./schema')
const {context} = require('./context')

const server = new ApolloServer({resolvers, typeDefs, context}).listen({port:4000},
    () => {console.log("Server is ready")})