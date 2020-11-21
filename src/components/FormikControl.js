import React from 'react'
import Input from './Input'
const FormikControl = (props) => {
    const { control , ...rest} = props

    switch(control){
      case 'input' : return <Input {...rest}/>
      case 'textArea' : 
      case'select' : 
      case 'radio' :
      case 'checkbox' : 
      case 'date' :
          default: return null
    }
}
export default FormikControl