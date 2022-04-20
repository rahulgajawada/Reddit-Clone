import Post from './Post'
import {useState, useEffect} from 'react'
const { gql, useQuery } = require('@apollo/client')

const GET_POSTS = gql`
    query {
        allPosts{
            content
            title
            community{
                name
            }
        }
    }

`

const Posts = () => {
    const {loading, error, data} = useQuery(GET_POSTS)
    const [posts, setPosts] = useState([])
    let x = []
    if(data){
        x = [...data.allPosts]
        x = x.map(e => ({title: e.title, content:e.content, community:e.community.name }))
    }
    useEffect(() => {
        if(data){
            setPosts(x)
        }
    }, data)
    return (
        <div>
           {posts.map(({title, content, community}) => <Post title = {title} content={content} community={community}></Post>)}
        </div>
    )
}

export default Posts