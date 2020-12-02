import React,{useState} from 'react'

const StateObject = () => {
    const [bio, setBio] = useState({
        firstname : '',
        lastname: ''
    })
return(
    <form>
        <input placeholder='firstname' type='text'value={bio.firstname} 
        onChange={(e) => {
            //using spread operator to set the value
            setBio({ ...bio, firstname: e.target.value })
        }}
        />
        <input placeholder='lastname' type='text'value={bio.lastname} 
        onChange={(e) => {
            setBio({ ...bio, lastname: e.target.value})
        }}
        />
        <h6>{JSON.stringify(bio)}</h6>
    </form>

)
}
export default StateObject 

