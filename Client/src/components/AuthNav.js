import React from "react";
import {Box} from '@chakra-ui/react'
import AuthenticationButton from "./authenticate";


const AuthNav = () => (
  <Box 
    ml='auto'
  >
    <AuthenticationButton />
  </Box>
);

export default AuthNav;