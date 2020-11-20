import React,{useState} from 'react'

 const Condition = () => {
    const [logger, setLogger] = useState(false)
    return(
        
            logger ?  <h1>Hello</h1> : <h1>HI</h1>
        
    )
 }
 export default Condition