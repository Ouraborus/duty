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
    this.handleSignOut = this.handleSignOut.bind(this)
  }
  handleSignOut () {
    this.firebase.signOut()
    window.location.reload()
    window.location.href = 'http://localhost:8080/#/'
  }
  render () {
    return (
      <Fragment>
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <header className='mdl-layout__header'>
            <div className='mdl-layout__header-row'>
              <Link to='/' className='link'>
                <span className='mdl-layout-title'>Duty</span>
              </Link>
            </div>
          </header>
          <div className='mdl-layout__drawer'>
            <span className='mdl-layout-title'>Duty</span>
            <nav className='mdl-navigation'>
              <Link className='mdl-navigation__link' to='/'> Inicio </Link>
              <Link className='mdl-navigation__link' to='/acerca'> Acerca </Link>
              <Link className='mdl-navigation__link' to='/descripcion'> ¿Qué es Duty? </Link>
              <Link className='mdl-navigation__link' to='/legal'> Términos y condiciones </Link>
              <p className='mdl-navigation__link' onClick={this.handleSignOut} > Cerrar Sesión </p>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}
