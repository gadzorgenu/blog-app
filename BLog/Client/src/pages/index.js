import React from 'react'

const Login = React.lazy(() => import('./login'))
const SignUp = React.lazy(() => import('./signUp'))
const Post = React.lazy(() => import ('./Posts'))

const Pages = {
  Login,
  SignUp,
  Post
};

export default Pages;