const User = require('../models/user')

const UserController = {}

//creating a user 
UserController.createUser = async (req, res)=> {
    try{
        let newUser = new User(req.body)
        let result = await newUser.save()
        res.status(200).send({message: 'Account created', result})
    }catch(error){
        console.log(error)
    }
}

//retrieving users info
UserController.getUsers = async (req,res) => {
    try {
        let user = await User.find({})
        if(!user){
            res.status(400).send({message: 'User not found'})
        }else{
            res.status(200).send({message: 'User found', user})
        }
    } catch (error) {
        console.log(error)
    }
}

//         //id:req.params.id
//         //getting a user 
//  UserControllers.getOne = async(req,res) => {
//      try {
         
//      } catch (error) {
//          console.log(error)
//      }
//  }


//update user
UserController.updateUser = async (req,res) => {

    //destructuring user detail
    const {firstname, lastname,email, phone,password } = req.body
    
    try {
         let user=  await User.findOneAndUpdate(
            {_id: req.params.id},
            // {$set: req.body }
            {firstname, lastname, email, phone, password }
        )
        if(user){
            res.status(200).send({message:'User updated successfully', user})
        }else{
            res.status(400).send({message:'Could not update user'})
        }
    } catch (error) {
        console.log(error)
    }
}

//deleting user info
UserController.deleteUser = async ( req,res ) => {
    try {
      let user=  await User.findOneAndDelete({_id: req.params.id})
      if(user){  
      res.status(200).send({message: 'User deleted successfully'})
      }else{
          res.status(400).send({message: 'Could not delete user'})
      }
    } catch (error) {
        console.log(error)
    }
}
 
module.exports = UserController