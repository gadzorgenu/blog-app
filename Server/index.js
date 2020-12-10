
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const userRoute = require('./src/routes/User')
const blogRoute = require('./src/routes/blog')

const app = express()

const db = process.env.db

const port = process.env.port

mongoose.connect(db, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology:true, 
    useCreateIndex: true
    },
    ()=>{
    app.listen(port, () => {
        //also trying to log info
        console.info('Application started');
    })
})
//middleware
app.use(express.json())

//routes
app.use(userRoute)
app.use(blogRoute)

app.use(express.static(path.join(__dirname,'build')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
