import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Heading, Button,Image} from '@chakra-ui/react'

const Posts = () => {
    const [posts, setPosts] = useState([])
    
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) =>{
    //         setPosts(res.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // })
    return(

    //     <Box>
    //     {
    //         posts.map((post) => (
    //         <h6 key={post.id}>{post.title}</h6>
    //         ))
    //     }
    // </Box>

    <Box>
        {/* <Image src='../../assets/bg.jpg' alt='banner'/> */}
        <Box bg='red.300' h='300px' pt={10} textAlign='center'>
            <Heading as='h5'>Welcome to your blog app</Heading>
        </Box>
        <Button ml={5} mt={4}colorScheme='blue'>Add a post</Button>
    </Box>
    )
}

export default Posts