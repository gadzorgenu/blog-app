const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const handleError = () => {
    let err = { firstname: '', lastname:'', email:'', password:'', phone:'', comparePassword:''}
    switch (error.message) {
        case 'incorrect firstname':
            err.firstname = 'firstname does not exist'
        case 'incorrect lastname':
            err.lastname= 'lastname does not exist'
        case 'incorrect email':
            err.email='invalid email'
        case 11000: 
            err.email='email already exist'
            break;
    
        default:
            return ''
    }

    if(error.message.includes('user validation failed')){
        Object.values(error.errors).forEach(({properties}) => {
            err[properties.path] = properties.message
        })
    }
    return err
}
const UserController = {}

//creating a user 
UserController.createUser = async (req, res)=> {
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        let newUser = new User(req.body)
        let result = await newUser.save()
        res.status(201).send({message: 'Account created', result})
    }catch(error){
        console.log(error)
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

//retrieving users info
UserController.getUsers = async (req,res) => {
    try {
        let user = await User.find({})
        res.status(200).send({message: 'User found', user})
    } catch (error) {
        console.log(error)
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

//update user
UserController.updateUser = async (req,res) => {

    //destructuring user detail
    const {firstname, lastname,email, phone,password, username } = req.body
    
    try {
         let user=  await User.findOneAndUpdate(
            {_id: req.params.id},
            {firstname, lastname, email, phone, password,username }
        )
        if(user){
            res.status(200).send({message:'User updated successfully', user})
        }else{
            res.status(400).send({message:'Could not update user'})
        }
    } catch (error) {
        console.log(error)
        const warning = handleError(error)
        res.status(400).json({warning})
    }
}

UserController.loginUser= async (req,res) =>{

    try{
        const body = req.body
        console.log('body',body)
        const user = await User.findOne({ email: body.email }).exec()

        const passwordCheck = user === null
            ? false
            : await bcrypt.compareSync(body.password, user.password)

        if (!(user && passwordCheck)) {
            return res.status(401).json({
            error: 'invalid email or password'
            })
        }
        const userToken ={
            email: user.email,
            username: user.username,
            id: user._id
        }
        console.log('userToken', userToken)

        const token =jwt.sign(userToken, process.env.SECRET)
        console.log('token',token)
        res.status(200).send({token,email: user.email,username: user.username })
    }catch(error){
        res.status(500).send(error)
    }
    // try {
    //     let user = await User.findOne({ email: req.body.email }).exec();
    //     if(!user) {
    //         return res.status(400).send({ message: "The email does not exist" });
    //     }
    //     if(!Bcrypt.compareSync(req.body.password, user.password)) {
    //         return res.status(400).send({ message: "The password is invalid" });
    //     }
    //     res.send({ message: "The email and password combination is correct!" });
    // } catch (error) {
    //     res.status(500).send(error);
    // }
}

 
module.exports = UserController