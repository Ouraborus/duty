import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Login/Login'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  return (
    <Fragment>
      <NavBar />
      <Login />
    </Fragment>
  )
}
