const express = require('express')

const server = express()

server.get('/', (req, res)=>{
    res.status(200).send('Georgina')
})

server.listen(8000,()=> {console.log('server started')})