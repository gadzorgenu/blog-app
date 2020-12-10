import React,{createContext,useState, useEffect} from 'react'
import axios from 'axios'
import config from '../config'
import PropTypes from 'prop-types'

const Blog_API = config.backend_API
export const BlogContext = createContext()


const BlogContextProvider = ({children}) => {

    const [blog, setBlog] = useState([])

    const addBlog = async payload => {
        try {
            await axios({
                method:'post',
                url:`${Blog_API}/api/newBlog`,
                body: payload,
            })
        } catch (error) {
            return error
        }
    }
    useEffect(()=>{
        let mounted = true
        const getBlogs = async () => {
            try {
                await axios({
                    method: 'get',
                    url: `${Blog_API}/api/blogs`
                })
                .then(res => {
                   setBlog(res) 
                })
            } catch (error) {
                return error
            }
        }
        if(mounted) getBlogs()
        return ()=> (mounted = false)
    },[])
    

    return (
        <BlogContext.Provider
            value={{
                addBlog,
                blog
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}

BlogContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default BlogContextProvider
