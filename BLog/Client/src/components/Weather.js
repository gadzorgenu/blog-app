import React, {useState} from 'react'
import {Box,Flex,Button, Input} from '@chakra-ui/react'

const Weather =() =>{
    const [input, setInput] = useState('')
    const [search, setSearch] = useState({})

    const foreCast = (e) => {
        e.preventDefault()
        fetch(``)
        .then((result) => {
            setInput('')
            setSearch(result)
            console.log(result)
        })
    }

    const handleSearch = (e) => {
        setInput(e.target.value)
    }

    return (
       <Flex justify='center'>
           <Input value={input} onChange={handleSearch} placeholder='Enter a city'/>
           <Button onClick={foreCast} colorScheme='red'>Search</Button>
       </Flex>
    )
}

export default Weather
