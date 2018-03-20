import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
// import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  return (
    <Fragment>
<<<<<<< HEAD
      <NavBar />
      {/* <Login /> */}
      <SignUp />
=======
      <div className='app-container'>
        <NavBar />
        <div className='grid'>
          <Card />
          <Card />
        </div>
      </div>
>>>>>>> c128007d1b1ccee6c599e66bb107a1c26f957fe5
    </Fragment>
  )
}
