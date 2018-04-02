import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './_login.scss'
import '../../scss/_icon.scss'

export default class Login extends Component {
  render () {
    return (
      <Fragment>
        <div className='login'>
          <div className='login__image-container' />
          <section className='login__form'>
            <input className='login__form-input' placeholder='Username or Email' type='text' required />
            <input className='login__form-input' placeholder='Password' type='password' required />
            {/* <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__form-button'>
            </button> */}
            <div>
              <Link to='/dashboard'>Entrar</Link>
            </div>
            {/* <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent login__form-button'>
              </button> */}
            <div>
              <Link to='/registrarse'>Registrarse</Link>
            </div>
            <div className='login__social-media'>
              <button className='login__icons'>
                <i className='icon icon__facebook' />
              </button>
              <button className='login__icons'>
                <i className='material-icons'>mail</i>
              </button>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
