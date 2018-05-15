import React, {Fragment} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Firebase from './firebase/Firebase'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import CompanyJobs from './components/CompanyJobs/CompanyJobs'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/404/404'
import credentials from './firebase/Credentials'
import About from './components/About/About'
import Legal from './components/Legal/Legal'
import Description from './components/Description/Description'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_responsive.scss'
import './scss/_app.scss'

export default function App () {
  Firebase.init(credentials)
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch >
          <Route exact path='/' component={() => <Login />} />
          <Route exact path='/registrarse' component={() => <SignUp />} />
          <Route exact path='/trabajos' component={() => <CompanyJobs />} />
          <Route exact path='/acerca' component={() => <About />} />
          <Route exact path='/legal' component={() => <Legal />} />
          <Route exact path='/descripcion' component={() => <Description />} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  )
}
