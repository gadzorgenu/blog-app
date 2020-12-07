import React,{ createContext } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types' 
import config from '../config'

const BLOG_API = config.backend_API

export const UserContext = createContext()

const UserContextProvider = ({children}) => {

  const addUser = async payload => {
    try {
         await axios({
            method: 'post',
            url: `${BLOG_API}/api/newUser`,
            body: payload
        })
    } catch (error) {
        return error
    }
}


    return (
      <UserContext.Provider
        value={{
          addUser
        }}
      >
        {children}  
      </UserContext.Provider>
    )
}

UserContextProvider.propTypes= {
    children: PropTypes.node.isRequired
}

export default UserContextProvider
