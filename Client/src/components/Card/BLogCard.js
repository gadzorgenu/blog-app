import React,{useState} from 'react'
import {Box, Text, Image, Flex, IconButton, Spacer} from '@chakra-ui/react'
import { GoMarkGithub, GoThumbsdown, GoThumbsup } from "react-icons/go"
import {TiSocialLinkedinCircular} from 'react-icons/ti'

const BlogCard = ({title, description,like, dislike, github,linkedIn, author,image}) => {
    // const[count,setCounts] = useState(0)
    // const[dislike,setDislike] = useState(0)
    // const up = () => {
    //     setCounts(count + 1) 
    // }

    // const down = () => {
    //     setDislike(dislike - 1)
    // }

    return (
        <Box bg='blue.300' rounded='30px' w={{md: '300px'}} color='white'  my={12} ml={8}>
           <Image src={image} borderTopRadius='30px'/>
                <Text fontSize='18px' fontWeight='bold' textAlign='center' py={2} >{title}</Text>
                <Box px={4} textAlign='justify' pb={6} >
                    <Text fontSize='14px' >{description} <Text as='a' pl='100px'> view more</Text></Text>
                    <Flex>
                        <Text fontSize='15px' pt={2} fontWeight='bold' >By: {author}</Text>
                        <Spacer/>
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
                            fontSize='25px'
                            icon={<TiSocialLinkedinCircular />}
                        />
                </Flex>
                <Flex>
                    <Flex pr={4}>
                        <IconButton
                            colorScheme="none"
                            aria-label="Like"
                            icon={<GoThumbsup />}
                            p={0}
                            size='xl'
                        />
                        <Text pt={1} pl={1}>{like}</Text>
                    </Flex>
                    <Flex>
                        <IconButton
                            colorScheme="none"
                            aria-label="Dislike"
                            icon={<GoThumbsdown />}
                            p={0}
                            size='xl'
                        />
                    <Text pt={1} pl={1}>{dislike}</Text>
                    </Flex>
                </Flex>
            </Box>
       </Box>
    )
}

export default BlogCard
