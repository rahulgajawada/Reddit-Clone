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
        GetPosts: [Post]
    }
`

const posts = [
    {
        content: "yo yo honey singh",
        title: "Covid Testing Megathread"
    },
    {
        content: "ola amigo",
        title: "UMass YMCP Swipes"
    }
]



const resolvers = {
    Query: {
        GetPosts: () => posts
    }
}

module.exports =  {resolvers, typeDefs}