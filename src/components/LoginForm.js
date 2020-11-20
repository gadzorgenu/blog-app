import React from 'react'
import '../App.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FacebookLoginButton } from 'react-social-login-buttons'

const LoginForm = () => {
    document.title = 'LOGIN'
    return (
    <Form className='login-form'>
        <h2 className='text-center'>Login</h2>
        <FormGroup className='display-flex'> 
            <Label>Email:</Label>
            <Input type='email' placeholder='gina@gmail.com'/>
        </FormGroup >
        <FormGroup className='display-flex'>
            <Label>Password:</Label>
            <Input type='password' placeholder='******'/>
        </FormGroup>
        <Button type='submit' className='btn-lg btn-block button'>Log in</Button>
        
        <div>
            <a className='color-white' href='/signup'>Create Account</a>
            <span className='p-2'>|</span>
            <a className='color-white' href='/signup'>Forgot Password</a>
            </div>
    </Form>
)
}

export default LoginForm
