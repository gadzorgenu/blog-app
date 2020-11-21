import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        axios.get('')
        .then((res) =>{
            setPosts(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    })
    return(
        <h1>Posts</h1>
    )
}

export default Posts