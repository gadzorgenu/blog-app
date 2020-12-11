const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const BlogController = {}

BlogController.addPost = async ( req, res) => {
    try {
        let blog = new Blog(req.body)
        let result = await blog.save()
        res.status(201).send({message: 'Blog created', result})
    } catch (error) {
        console.log(error)
    }
}

BlogController.getPosts = async (req, res) => {
    try {
        let blog = await Blog.find({title: req.params.title})
        blog ? res.status(200).send({message: 'Blog available', blog}) : res.status(400).send({message: 'Blog unavailable'})
    } catch (error) {
        console.log(error)
    }
}

//update blog
BlogController.updateBlog = async (req,res) => {

    //destructuring user detail
    const {title, body, social,author,like,dislike} = req.body
    
    try {
         let blog=  await Blog.findOneAndUpdate(
            {_id: req.params.id},
            {title, body, social,author,like,dislike}
        )
        if(blog){
            res.status(200).send({message:'Blog updated successfully', blog})
        }else{
            res.status(400).send({message:'Could not update blog'})
        }
    } catch (error) {
        console.log(error)
    }
}

//deleting blog
BlogController.deleteBlog = async ( req,res ) => {
    try {
      let blog=  await Blog.findOneAndDelete({_id: req.params.id})
      if(blog){  
      res.status(200).send({message: 'Blog deleted successfully'})
      }else{
          res.status(400).send({message: 'Could not delete blog'})
      }
    } catch (error) {
        console.log(error)
    }
}

// const getToken = req => {
//     const authorization = req.get('authorization')
//     if(authorization && authorization.toLowerCase().startsWith('bearer')){
//         return authorization.substring(7)
//     }return

//  }

//Creating a post only if the user is authenticated
//TodO: Create a blog based on user role
// BlogController.postBlog = async (req, res) => {

//     const body = req.body

//     const token = getToken(req)
//     console.log('token',token)

//     const decodedToken = jwt.verify(token, process.env.SECRET)
//     console.log('decodedToken', decodedToken)

//     if (!token || !decodedToken.id) {
//       return res.status(401).json({ error: 'token missing or invalid' })
//     }
//     const user = await User.findById(decodedToken.id)
  
//     const blog = new Blog({
//         title: body.title,
//         author: body.author,
//         body: new Date(),
//         like: body.like,
//         dislike: body.dislike,
//         social: body.social,
//         user: user._id
//     })
  
//     const newBlog = await blog.save()
//     user.blog = user.blog.concat(newBlog._id)
//     await user.save()
//     console.log('user',user)
  
//     response.json(newBlog)
//   }

module.exports = BlogController
