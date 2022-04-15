const {gql} =  require('apollo-server')

 const typeDefs = gql`
    type Post{
        author: User
        content: String
        # createdAt: DateTime
        id: Int
        published: Boolean
        title: String
        # updatedAt: DateTime!
    }

    type User{
        email: String!
        id: Int!
        name: String!
        posts: [Post!]!
    }

    type Query{
        posts: [Post!]!
        allPosts: [Post!]!
    }

    type Mutation{
        createUser(email: String!, name: String!): User!
        createPost(title: String!, content: String!): Post!
    }
`

const posts = [
    {
        content: "omicron is the new variant",
        title: "Covid Testing Megathread"
    },
    {
        content: "ola amigo",
        title: "UMass YMCP Swipes"
    }
]



const resolvers = {
    Query: {
        posts: () => posts,
        allPosts: (parent, args, context) => {
            return context.prisma.post.findMany({})
        }
    },
    Mutation:{
        createUser(parent, args, context){
            console.log(args)
            return context.prisma.user.create({
                data:{
                    name: args.name,
                    email: args.email
                }
            })
        },
        createPost(parent, args, context){
            return context.prisma.post.create({
                data:{
                    content: args.content,
                    title: args.title,
                    user:{
                        connect:{id:1}
                    }
                }
            })
        }
    }
}

module.exports =  {resolvers, typeDefs}