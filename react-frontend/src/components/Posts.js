import Post from './Post'
const { gql, useQuery } = require('@apollo/client')

const GET_POSTS = gql`
    query GetPosts{
        posts{
            content
            title
        }
    }

`

const Posts = () => {
    const {data} = useQuery(GET_POSTS)
    console.log(data)
    return (
        <div>
            <p>Hi</p>
        </div>
    )
}

export default Posts