import React, {Fragment} from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' render={() => <Login />} />
        <Route exact path='/registrarse' render={() => <SignUp />} />
      </Fragment>
    </Router>
  )
}
