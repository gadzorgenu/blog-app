import React from 'react'
import {Box, Text, Image,List, Flex, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const BlogCard = ({title, description,like, dislike, github,linkedIn, author,image}) => {

    return (
        <Box bg='blue.300' rounded='30px' w={{md: '350px'}} color='white'  my={12} ml={8}>
           <Image src={image} borderTopRadius='30px'/>
            <Box p={4} textAlign='justify' >
                <Text fontSize='20px' fontWeight='bold' textAlign='center' >{title}</Text>
                <Text>{description}</Text>
                <Flex>
                    <List>
                        <Text>{github}</Text>
                        <Text>{linkedIn}</Text>
                        <Text>{author}</Text>
                    </List>
                    <Text>{like}</Text>
                    <Text>{dislike}</Text>
                </Flex>
            </Box>
       </Box>
    )
}

export default BlogCard
