import React from 'react'
import {Box} from '@chakra-ui/react'
import MainNavBar from './MainNavbar'
import AuthNav from "./AuthNav";

const NavBar = ()  => {

    
    return (
        <Box>
            <MainNavBar/>
            <AuthNav/>
        </Box>
    )
}

export default NavBar
