// const express = require('express')

// const server = express()

// server.get('/', (req, res)=>{
//     res.status(200).send('Georgina')
// })

// server.listen(8000,()=> {console.log('server started')})

require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./src/routes/User')

const app = express()
// const db = 'mongodb+srv://sweetie89:TRzw6HyJ7Cd0H6yl@cluster0.agzpp.mongodb.net/blogbackend'

const port = 8000



mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true},()=>{
    app.listen(port, () => {
        //also trying to log info
        console.info('Application started');
    })
})

app.get('/', (req,res) => {
    res.status(200).send('hello')
})

//routes
app.use(userRoute)