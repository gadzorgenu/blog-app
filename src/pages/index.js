import React from 'react'

const Login = React.lazy(() => import('./login'))
const SignUp = React.lazy(() => import('./signUp'))

const Pages = {
  Login,
  SignUp
};

export default Pages;