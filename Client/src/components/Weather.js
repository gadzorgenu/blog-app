import React, {useState} from 'react'
import {Box,Flex,Button, Text, Input} from '@chakra-ui/react'
import axios from 'axios'
import config from '../config'


const BASE = config.base
const KEY = config.key


const Weather =() =>{
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [search, setSearch] = useState(null)


    const Search =(e) => {
        e.preventDefault()
        if(country&& city){
        axios.get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
        .then((res) => {
            setCountry('')
            setCity('')
            setSearch({...res.data})
            console.log(res.data.location)
        }).catch((error) => {
            console.log(error)
        })
    }
    }
    
    const handleCountry = (e) => {
        setCountry(e.target.value)
    }
    const handleCity = (e)=> { 
        setCity(e.target.value)
    }

    return (
        <Box>
            <Flex justify='center'>
                <Input value={country} onChange={handleCountry} placeholder='Enter a country'/>
                <Input value={city} onChange={handleCity} placeholder='Enter city'/>
                <Button onClick={Search} colorScheme='red'>Search</Button>
            </Flex>
            { search && (
                <Box>
                    <Text>{`${search.location.country}`}</Text>
                </Box>
            )}
        </Box>
      
    )
}

export default Weather
