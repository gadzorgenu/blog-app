import React,{useState} from 'react'
import {Box, Text, Image, Flex, IconButton, Spacer, Avatar} from '@chakra-ui/react'
import { GoMarkGithub, GoThumbsdown, GoThumbsup } from "react-icons/go"
import {TiSocialLinkedinCircular, TiArrowRight} from 'react-icons/ti'

const BlogCard = ({title, description,like,date, dislike,role, github,linkedIn, category, readTime, author,image, avatar}) => {
    // const[count,setCounts] = useState(0)
    // const[dislike,setDislike] = useState(0)
    // const up = () => {
    //     setCounts(count + 1) 
    // }

    // const down = () => {
    //     setDislike(dislike - 1)
    // }

    return (
        <Box w={{md: '300px'}} color='gray.500'  my={12} ml={8}>
           <Image src={image} />
               <Text fontSize='10px' pt={2}>{category} - {readTime}</Text>
           {/* <Text pt={2}>{date}</Text> */}
                <Text fontSize='18px' fontWeight='bold' >{title}</Text>
                <Box  textAlign='justify' pb={6} >
                    <Text fontSize='14px' >{description}</Text>
                    <Flex pt={1}>
                        <Avatar name='Georgina Adzorgenu' mt={2}src={avatar} size="sm" mr={1}/>
                        <Box pt={2}>
                            <Text fontSize='13px' fontWeight='bold'> {author}</Text>
                            <Text fontSize='11px' pt={-1}>{role}</Text>
                        </Box>
                        <Box pl={14}>
                            <IconButton
                                as='a'
                                aria-label="Github"
                                href={github}
                                icon={<GoMarkGithub />}
                                p={0}
                                size='xl'
                                bg='none'
                            />
                            <IconButton
                                as='a'
                                aria-label="LinkedIn"
                                href={linkedIn}
                                fontSize='25px'
                                bg='none'
                                p={0}
                                icon={<TiSocialLinkedinCircular />}
                            />
                        </Box>
                </Flex>
                <Flex pt={2}>
                    <Flex pr={4}>
                        <IconButton
                            aria-label="Like"
                            icon={<GoThumbsup />}
                            p={0}
                            size='xl'
                            bg='none'
                        />
                        <Text pt={1} pl={1}>{like}</Text>
                    </Flex>
                    <Flex>
                        <IconButton
                            aria-label="Dislike"
                            icon={<GoThumbsdown />}
                            p={0}
                            size='xl'
                            bg='none'
                        />
                    <Text pt={1} pl={1}>{dislike}</Text>
                    </Flex>
                    <Spacer/>
                        <Text as='a'  pl='80px' fontSize='10px'> view more</Text>
                        <TiArrowRight pt ={2} pr={8}/>
                </Flex>
            </Box>
       </Box>
    )
}

export default BlogCard
