import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import UserContextProvider from './context/userContext'
import  BlogContextProvider from './context/blogContext'
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./context/authContext"
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <BlogContextProvider>
          <Router>
          <Auth0ProviderWithHistory>
            <App />
          </Auth0ProviderWithHistory>
          </Router>
        </BlogContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


