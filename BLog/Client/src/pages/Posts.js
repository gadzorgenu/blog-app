import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Heading} from '@chakra-ui/react'
import Weather from '../components/Weather'
import AddPost from '../components/Modals/AddPostModal'


const Posts = () => {
    
    const [posts, setPosts] = useState([])

    
    useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) =>{
    //         setPosts(res.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    })
    return(

    //     <Box>
    //     {
    //         posts.map((post) => (
    //         <h5 key={post.id}>
    //           <h6 >{post.title}</h6>
    //           <h6 >{post.body}</h6>
    //        </h5>
    //         ))
    //     }
    // </Box>

    <Box>
        {/* <Image src='../../assets/bg.jpg' alt='banner'/> */}
        <Box bg='red.300' h='300px' pt={10} textAlign='center'>
            <Heading as='h5'>Welcome to your blog app</Heading>
        </Box>
       <AddPost/>
       <Weather/>
    </Box>
    )
}

export default Posts