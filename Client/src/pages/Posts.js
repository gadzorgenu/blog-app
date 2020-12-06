import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Button, Heading, Flex, Input} from '@chakra-ui/react'
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
    },[])

    return(

    <Box>
        <Flex m='auto' w={{md: '40%'}}>
            <Input placeholder='Search blog post' rounded='30px'/>
            <Button rounded='30px' bg='red.400'>Search</Button>
        </Flex>
       <AddPost/>
    </Box>
    )
}

export default Posts