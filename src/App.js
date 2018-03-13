import React, {Fragment} from 'react'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import './scss/_reset.scss'
import './scss/_fonts.scss'
import './scss/_app.scss'

export default function App () {
  return (
    <Fragment>
      <div className='app-container'>
        <NavBar />
        <Card />
      </div>
    </Fragment>
  )
}
