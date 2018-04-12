import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
import { HashRouter as Router, Route } from 'react-router-dom'
import Firebase from './firebase/Firebase'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import SignUp from './components/SignUp/SignUp'
import credentials from './firebase/Credentials'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  Firebase.init(credentials)
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={() => <Login />} />
        <Route exact path='/registrarse' component={() => <SignUp />} />
        <Route exact path='/dashboard' component={() => <Dashboard />} />
      </Fragment>
    </Router>
  )
}
