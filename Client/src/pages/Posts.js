import React, {useContext, useState} from 'react'
import axios from 'axios'
import {Box, Button, Heading, Flex, Input} from '@chakra-ui/react'
import AddPost from '../components/Modals/AddPostModal'
import NavBar from '../components/NavBar'
import {BlogContext} from '../context/blogContext'

const Posts = () => {
    
    const [posts, setPosts] = useState([])
    const {addBlog, getBlogs, blog} = useContext(BlogContext)

    return(

    <Box>
        <NavBar/>
        <Box mt='90px' mb='30px'>
        <Flex m='auto'  h={{md: '40%'}} w={{md:'50%'}}>
            <Input placeholder='Search blog post' rounded='30px'/>
            <Button rounded='30px' bg='red.300' ml={4}>Search</Button>
        </Flex>
        </Box>
        <Box pl='20px'>
            <AddPost/>
        </Box>
    </Box>
    )
}

export default Posts