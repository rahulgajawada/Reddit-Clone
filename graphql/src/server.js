const { ApolloServer } = require('apollo-server') 
const { resolvers, typeDefs } = require('./schema')
const {context} = require('./context')

const server = new ApolloServer({  	cors: {
    origin: '*',			// <- allow request from all domains
    credentials: true}, resolvers, typeDefs, context}).listen({port:4000},
    () => {console.log("Server is ready on port 4000")})