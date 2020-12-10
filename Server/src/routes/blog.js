const router = require('express').Router()

const { addPost, getPosts,updateBlog } = require('../controllers/blogController')

//creating post 
router.post('/api/newblog', addPost)

//retrieving posts
router.get('/api/blogs', getPosts)

//updating blogControllerrouter
router.patch('/api/update-blog', updateBlog)

module.exports = router