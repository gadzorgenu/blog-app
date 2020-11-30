const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 14,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required:true,
    },
    password:{
        type: String,
        minlength: 8,
        required: true
    }
})

//mongoose.model(nameOfCollection, nameOfSchema)
const User = mongoose.model('user', userSchema)

module.exports = User