import React from 'react'
import {Box, Link, Flex,List, Text,Spacer} from '@chakra-ui/react'
import SideBar from './SideBar'
import MenuOptions from './Menu'
import AuthenticationButton from "./authenticate";

const NavBar = ()  => {

    return (
        <Box bg='red.300'color='white' py={3}>
            <List>
                <Flex>
                    {/* <SideBar/> */}
                    <Text pl={10} pt={1} > Gina's Daily Blog</Text>
                    <Spacer/>
                    <Flex  pr={8}>
                        <Box pt={1}>
                            <Link href='/signup' >Sign Up</Link>
                            <Link href='/login' ml={5}>Login</Link>
                            <AuthenticationButton/>
                        </Box>
                        
                        <MenuOptions/>
                    </Flex>
                </Flex>
                
            </List>
        </Box>
    )
}

export default NavBar
