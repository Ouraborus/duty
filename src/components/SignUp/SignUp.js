import React, { Component, Fragment } from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import './_SignUp.scss'

export default class SignUp extends Component {
  render () {
    return (
      <Fragment>
        <NavBar />
        <div className='signup'>
          <div className='signup__image-container' />
          <section className='signup__form'>
            <input className='signup__form-input' placeholder='Username or Email' type='text' required />
            <input className='signup__form-input' placeholder='Password' type='password' required />
            <input className='signup__form-input' placeholder='Nombres' type='text' required />
            <input className='signup__form-input' placeholder='Apellidos' type='text' required />
            <input className='signup__form-input' placeholder='Edad' type='number' required />
            <input className='signup__form-input' placeholder='Lugar de trabajo' type='text' required />
            {/* <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__form-button'>
                Registrarse
            </button> */}
            <div> <Link to='/'>Holi </Link> </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
