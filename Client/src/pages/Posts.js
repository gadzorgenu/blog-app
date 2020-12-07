import React, {useContext, useState} from 'react'
import axios from 'axios'
import {Box, Button, Heading, Flex, Input} from '@chakra-ui/react'
import AddPost from '../components/Modals/AddPostModal'
import {BlogContext} from '../context/blogContext'

const Posts = () => {
    
    const [posts, setPosts] = useState([])
    const {addBlog, getBlogs, blog} = useContext(BlogContext)

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