
import React from 'react'
// import {
//     FormControl,
//     FormLabel
//   } from "@chakra-ui/react"
import {Formik,Form} from 'formik'
  import { Box, Heading, Button} from '@chakra-ui/core'
  import FormikControl from '../FormikControl'
  import {LoginSchema} from '../../validation'

  const  LoginForm = ()=> {

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit =values => {
        console.log( 'Data',values)
    }

    return(
        <Box>
            <Box textAlign='center' my={6}>
                <Heading as='h5' fontSize={{ md: '2xl'}}>LOGIN</Heading>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema = {LoginSchema}
                onSubmit= {onSubmit}
            >
                { formik => (
                    <Form>
                       <FormikControl
                        control='input'
                        label='Email'
                        type='email'
                        name='email'
                       />
                       <FormikControl
                        control='input'
                        label='Password'
                        type='password'
                        name='password'
                       />
                        <Button type='submit' disabled = {!formik.isValid}></Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )

  }

  export default LoginForm
