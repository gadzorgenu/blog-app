const router = require('express').Router()

const { addPost, getPosts,updateBlog ,deleteBlog} = require('../controllers/blogController')

//creating post 
router.post('/api/newblog', addPost)

//retrieving posts
router.get('/api/blogs', getPosts)

//updating blogControllerrouter
router.patch('/api/update-blog', updateBlog)

//deleting a blog
router.delete('api/delete-blog',deleteBlog)

module.exports = router