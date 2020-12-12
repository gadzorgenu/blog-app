import React from 'react'
import {Box, Text, Image,List, Flex, IconButton} from '@chakra-ui/react'
import { GoMarkGithub, GoThumbsdown, GoThumbsup } from "react-icons/go"
import {TiSocialLinkedinCircular} from 'react-icons/ti'
import { Link } from 'react-router-dom'

const BlogCard = ({title, description,like, dislike, github,linkedIn, author,image}) => {

    return (
        <Box bg='blue.300' rounded='30px' w={{md: '300px'}} color='white'  my={12} ml={8}>
           <Image src={image} borderTopRadius='30px'/>
                <Text fontSize='15px' fontWeight='bold' textAlign='center' px={4} >{title}</Text>
                <Box px={4} textAlign='justify' >
                    <Text fontSize='12px' >{description}</Text>
                    <Flex>
                        <Text fontSize='11px' >{author}</Text>
                        <IconButton
                            as='a'
                            colorScheme="none"
                            aria-label="Github"
                            href={github}
                            icon={<GoMarkGithub />}
                            p={0}
                            size='xl'
                        />
                        <IconButton
                            as='a'
                            p={0}
                            colorScheme="none"
                            aria-label="LinkedIn"
                            href={linkedIn}
                            size='xl'
                            icon={<TiSocialLinkedinCircular />}
                        />
                            
                </Flex>
                <Flex>
                    <Text>{like}</Text>
                    <Text>{dislike}</Text>
                </Flex>
            </Box>
       </Box>
    )
}

export default BlogCard
