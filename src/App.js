import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
import { HashRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import SignUp from './components/SignUp/SignUp'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
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
