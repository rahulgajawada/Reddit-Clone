const {gql} =  require('apollo-server')
const jwt = require('jsonwebtoken');

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
        createUser(email: String!, name: String!): AuthPayload!
        createPost(title: String!, content: String!, community: String!): Post!
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
            const user = await context.prisma.user.create({
                data:{
                    name: args.name,
                    email: args.email
                }
            })
            return {
                user,
                token: jwt.sign({userID: user.id}, 'reddit-secret-code')
            }
        },
        async createPost(parent, args, context){
            return context.prisma.post.create({
                data:{
                    content: args.content,
                    title: args.title,
                    user:{
                        connect:{id:1}
                    },
                    community:{
                        connect:{
                            name:args.community
                        }
                    }
                }
            })
        }
    }
}

module.exports =  {resolvers, typeDefs}