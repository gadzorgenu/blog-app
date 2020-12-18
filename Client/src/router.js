import React from 'react'
import Pages from './pages'
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/NavBar'

const Router = ()=> {

    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Navbar/>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp} />
                <Route path='/post' component={Pages.Post} />
                <Redirect from='*' to='/'/>
            </Switch>
        </React.Suspense>
    )
}

export default Router