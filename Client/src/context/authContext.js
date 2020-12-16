import React from 'react'
import {useHistory} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'

const Auth0ProviderWithHIstory =({children}) =>{
     const domain = process.env.REACT_APP_AUTH0_DOMAIN
     const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
     //You use the useHistory() hook to get the history object from React Router. 
     const history = useHistory()

     //You use the onRedirectCallback() method to handle the event where Auth0 redirects your users from the Auth0 Universal Login page to your React application. 
     const onRedirectCallback =(appState)=>{
         
        //You use the history.push() method to take users back to the route they intended to access before authentication.
         history.push(appState?.returnTo || window.location.pathname)
     }
     return(
         <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri= {window.location.origin}
            onRedirectCallback={onRedirectCallback}
         >
             {children}
         </Auth0Provider>
     )
}

export default Auth0ProviderWithHIstory

