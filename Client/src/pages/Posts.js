import React, {useContext,useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Button, Heading,Text, Grid, Flex, Input} from '@chakra-ui/react'
import AddPost from '../components/Modals/AddPostModal'
import NavBar from '../components/NavBar'
import {BlogContext} from '../context/blogContext'
import BlogCard from '../components/Card/BLogCard'
import config from '../config'

const Posts = () => {
    
    const Blog_API = config.backend_API
    const {addBlog, getBlogs, blog} = useContext(BlogContext)

    console.log('blog Data',blog)
    // useEffect(() => {
    //   const fetchData = async () => {
    //       const result = await getBlogs()
    //       console.log('hiiii')
    //     console.log('result',result)
    //   }
    //   fetchData()
    // },[])
    
    return(

    <Box>
        <NavBar/>
        <Box 
        bgImage="url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
         bgPosition="center"
         bgRepeat="no-repeat"
         bgSize='cover'
         py='150px'>
        <Flex m='auto'  h={{md: '40%'}} w={{md:'50%'}}>
            <Input placeholder='Search blog post' color='white' rounded='30px'/>
            <Button rounded='30px' bg='red.300' w='40%' ml={4}>Search</Button>
        </Flex>
        </Box>
        <Box pl='20px'>
            <AddPost/>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)' gap={8}>
            {
                <BlogCard

                />
            }
        </Grid>
    </Box>
    )
}

export default Posts