import React from 'react'
import {Box, Text, Heading,List, Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const BlogCard = ({heading, body, label, github,linkedIn}) => {

    return (
       <Box bg='blue.300' w={{md: '20%'}} color='white'  rounded='30px' p={10} my={12} ml={8}>
           <Heading>{heading}</Heading>
        <Text>{label}</Text>
        <Text>{body}</Text>
        <Flex>
            <List>
                <Text>{github}</Text>
                <Text>{linkedIn}</Text>
            </List>
        </Flex>
       </Box>
    )
}

export default BlogCard
