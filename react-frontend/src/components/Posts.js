import Post from './Post'
import {useState, useEffect} from 'react'
const { gql, useQuery } = require('@apollo/client')

const GET_POSTS = gql`
    query {
        allPosts{
            content
            title
        }
    }

`

const Posts = () => {
    const {loading, error, data} = useQuery(GET_POSTS)
    const [posts, setPosts] = useState([])
    let x = []
    if(data){
        x = [...data.allPosts]
    }
    useEffect(() => {
        if(data){
            setPosts(x)
        }
    }, data)
    return (
        <div>
           {posts.map(({title, content}) => <Post title = {title} content={content}></Post>)}
        </div>
    )
}

export default Posts