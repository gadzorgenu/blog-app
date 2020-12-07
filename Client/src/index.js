import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import UserContextProvider from './context/userContext'
import  BlogContextProvider from './context/blogContext'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <BlogContextProvider>
          <App />
        </BlogContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


