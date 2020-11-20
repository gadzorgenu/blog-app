import React, {useEffect,useState} from 'react'
import axios from 'axios'

function Posts(){

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            setPosts(result.data)
        }).catch((error) => {
            console.log(error);
        })
    })
    return(
        <h1>
        {
            posts.map((post) => (
            <h6>{post.title}</h6>
            ))
        }
        </h1>
       
    )
}
export default Posts