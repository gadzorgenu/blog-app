const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        // required: true
    },
    lastname:{
        type: String,
        // required: true
    },
    phone: {
        type: Number,
        minlength: [10, 'minimum length should be 10'],
        maxlength: 14,
        unique: true,
        // required: true
    },
    email: {
        type: String,
        unique: true,
    },
    password:{
        type: String,
        minlength: 8,
        // required: true
    },
    comparePassword:{
        type: String,
        minlength: 8,
        // required: true
    }
})

//mongoose.model(nameOfCollection, nameOfSchema)
const User = mongoose.model('user', userSchema)

userSchema.pre('save',async function(next){

    const salt = bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    
   next()
})

module.exports = User