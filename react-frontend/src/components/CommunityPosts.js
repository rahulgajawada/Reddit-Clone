import Post from './Post'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
const { gql, useQuery } = require('@apollo/client')


const GET_COMMUNITY_POSTS = gql`
    query CommunityPosts($community: String!) {
        communityPosts(community: $community) {
            title
            content
        }
    }
`

const CommunityPosts = () => {
    let {community} = useParams()
    console.log(community)
    const {loading, error, data} = useQuery(GET_COMMUNITY_POSTS, {
        variables: {community}
    })
    const [posts, setPosts] = useState([])
    let x = []
    if(data){
        x = [...data.communityPosts]
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

export default CommunityPosts