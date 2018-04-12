import React, { Component, Fragment } from 'react'
import Firebase from '../../firebase/Firebase'
import { Link } from 'react-router-dom'
import './_SignUp.scss'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    console.log(this)
  }
  render () {
    return (
      <Fragment>
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
            <div className='signup__button'>
              <Link to='/dashboard'> Entrar </Link>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
