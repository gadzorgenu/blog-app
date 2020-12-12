import React, {useContext,useEffect, useState} from 'react'
import axios from 'axios'
import {Box, Button, Heading,Text, Grid, Flex, Input} from '@chakra-ui/react'
import AddPost from '../components/Modals/AddPostModal'
import NavBar from '../components/NavBar'
import {BlogContext} from '../context/blogContext'
import BlogCard from '../components/Card/BLogCard'
import config from '../config'

const data =[
    {
        id:0,
        title:'The fun fact about photography',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi diam, porttitor sit amet ipsum vitae, posuere lobortis mauris. Nam sit amet tortor ut ipsum volutpat posuere sit amet at neque. ',
        social: {
            github: 'https://github.com/gadzorgenu'
        },
        like: 5,
        dislike: 1,
        author: 'Georgina Adzorgenu',
        image:'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
]


const Posts = () => {
    
    const Blog_API = config.backend_API
    const {addBlog, blog} = useContext(BlogContext)

    console.log('blog Data',blog)
   
    
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
        <Grid templateColumns={{md:'repeat(4, 1fr)'}} gap={8}>
            {
            data.map((item) => (
                <BlogCard
                key={item.id}
                title={item.title}
                linkedIn={item.linkedIn}
                author={item.author}
                description= {item.description}
                github={item.social.github}
                like={item.like}
                dislike={item.dislike}
                image={item.image}
                />
            ))
            }
        </Grid>
    </Box>
    )
}

export default Posts