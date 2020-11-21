import React from 'react'
import LoginForm from '../components/Form/LoginForm'
import Posts from '../components/Posts'
import StateObject from '../components/stateObject'

function Login(){ 
  return(
    <div className='login-page'>
      <LoginForm/>
      {/* <StateObject/> */}
      {/* <Posts/> */}
    </div>
  )
}
export default Login