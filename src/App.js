import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
// import Login from './components/Login/Login'
// import SignUp from './components/SignUp/SignUp'
import Card from './components/Card/Card'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  return (
    <Fragment>
      <NavBar />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <div className='app-container'>
        <NavBar />
        <div className='grid'>
          <Card />
          <Card />
        </div>
      </div>
    </Fragment>
  )
}
