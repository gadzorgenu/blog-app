// const express = require('express')

// const server = express()

// server.get('/', (req, res)=>{
//     res.status(200).send('Georgina')
// })

// server.listen(8000,()=> {console.log('server started')})

require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const db = process.env.dbLink

const port = process.env.PORT
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true},()=>{
    app.listen(port, () => {
        //also trying to log info
        console.info('Application started');
    })
})

app.get('/', (req,res) => {
    res.status(200).send('<h1>hello</h1>')
})

app.use('',express.static(''))