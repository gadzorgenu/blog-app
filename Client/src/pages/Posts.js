import React, {useContext,useEffect, useState} from 'react'
import {Box, Button, Heading,Text, Grid, Flex, Input} from '@chakra-ui/react'
import AddPost from '../components/Modals/AddPostModal'
import NavBar from '../components/NavBar'
import {BlogContext} from '../context/blogContext'
import BlogCard from '../components/Card/BLogCard'
import config from '../config'
import photograph from '../assets/photograph.jpg'

const data =[
    {
        id:0,
        title:'The fun fact about photography',
        description: 'In 1828, Louis Daguerre took the first photo that captured a human being. His intention was to take a photo of the Boulevard du Temple in Paris. The man in his photo was standing in the street, getting his shoes polished. Since the exposure lasted for seven minutes, the man also got captured.',
        social: {
            github: 'https://github.com/gadzorgenu2000',
            linkedIn: 'https://github.com/gadzorgenu2000'
        },
        like: 5,
        dislike: 1,
        author: 'Georgina Adzorgenu',
        image:photograph
    }
]


const Posts = () => {
    
    const Blog_API = config.backend_API
    const {addBlog, blog} = useContext(BlogContext)

    console.log('blog Data',blog)
   
    const truncate =(str, num) => {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }
    
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
                linkedIn={item.social.linkedIn}
                author={item.author}
                description= {truncate(item.description, 87)}
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