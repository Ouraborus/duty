import React, { Component, Fragment } from 'react'
import Firebase from '../../firebase/Firebase'
import { Link } from 'react-router-dom'
import './_NavBar.scss'
export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.firebase = Firebase
  }
  handleSignOut () {
    this.firebase.signOut()
  }
  render () {
    return (
      <Fragment>
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <header className='mdl-layout__header'>
            <div className='mdl-layout__header-row'>
              <span className='mdl-layout-title'>Duty</span>
            </div>
          </header>
          <div className='mdl-layout__drawer'>
            <span className='mdl-layout-title'>Duty</span>
            <nav className='mdl-navigation'>
              <Link className='mdl-navigation__link' to='/dashboard'> Dashboard </Link>
              <Link className='mdl-navigation__link' to='/contact'> Contacto </Link>
              <Link className='mdl-navigation__link' to='/about'> Acerca </Link>
              <Link className='mdl-navigation__link' onClick={this.handleSignOut} to='/'> Cerrar Sesión </Link>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}
