
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./src/routes/User')

const app = express()

const db = process.env.db

const port = process.env.port

mongoose.connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex: true
    },()=>{
    app.listen(port, () => {
        //also trying to log info
        console.info('Application started');
    })
})
//middleware
app.use(express.json())

//routes
app.use(userRoute)

app.get('/', (req,res) => {
    res.status(200).send('hello')
})