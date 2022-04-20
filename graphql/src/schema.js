const {gql} =  require('apollo-server')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs') 
const getUserID = require('./utils/getUserID')

 const typeDefs = gql`
    type Post{
        author: User
        content: String
        # createdAt: DateTime
        id: Int
        published: Boolean
        title: String
        community: Community
        # updatedAt: DateTime!
    }

    type User{
        email: String! 
        id: Int!
        name: String!
        posts: [Post!]!
    }

    type AuthPayload{
        user: User!
        token: String!
    }

    type Community{
        name: String!
        id: Int!
        posts: [Post!]!
    }

    type Query{
        posts: [Post!]!
        allPosts: [Post!]!
        allCommunities: [Community!]!
        communityPosts(community: String!): [Post!]!
    }

    type Mutation{
        createUser(email: String!, name: String!, password: String!): AuthPayload!
        createPost(title: String!, content: String!, community: String!): Post!
        loginUser(email: String!, password: String!): AuthPayload!
    }

    input CreateUserInput{
        name: String!
        email: String!
        password: String!
    }
`

const resolvers = {
    Query: {
        async allPosts(parent, args, context){
            return context.prisma.post.findMany({
                include:{
                    community:true
                }
            })
        },
        async allCommunities(parent, args, context){
            return context.prisma.community.findMany({})
        },
        async communityPosts(parent, args, context){
            return context.prisma.community.findUnique({
                where:{
                    name: args.community
                }
            })
            .posts()
        }
    },
    Mutation:{
        async createUser(parent, args, context){
            console.log(args)
            if(args.password.length < 8){
                return new Error('Password must be 8 characters or longer')
            }
            const password = await bcrypt.hash(args.password, 10)
            console.log(password)
            const user = await context.prisma.user.create({
                data:{
                    name: args.name,
                    email: args.email,
                    password
                }
            })
            return {
                user,
                token: jwt.sign({userID: user.id}, 'reddit-secret-code')
            }
        },
        async createPost(parent, args, context){
            const userID = getUserID(context.request)
            return context.prisma.post.create({
                data:{
                    content: args.content,
                    title: args.title,
                    user:{
                        connect:{id: userID}
                    },
                    community:{
                        connect:{
                            name:args.community
                        }
                    }
                }
            })
        },
        async loginUser(parent, args, context){
            const user = await context.prisma.user.findUnique({
                where: {
                    email: args.email
                }
            })
            if(user == undefined){
                return new Error("This email does not exist")
            }
            const hashedPassword = user.password
            const isMatch = bcrypt.compare(args.password, hashedPassword)
            if(!isMatch) return new Error("This password is incorrect")
            return {
                user,
                token: jwt.sign({userID: user.id}, 'reddit-secret-code')
            }
        }
    }
}

module.exports =  {resolvers, typeDefs}