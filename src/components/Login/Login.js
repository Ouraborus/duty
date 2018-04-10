import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import loginUtils from '../../firebase/Firebase'
import './_login.scss'
import '../../scss/_icon.scss'

export default class Login extends Component {
  constructor () {
    super()
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    loginUtils(this.user.value, this.pass.value)
  }

  render () {
    return (
      <Fragment>
        <div className='login'>
          <div className='login__image-container' />
          <section className='login__form'>
            <input className='login__form-input' placeholder='Username or Email' type='text' required ref={(user) => { this.user = user }} />
            <input className='login__form-input' placeholder='Password' type='password' required ref={(pass) => { this.pass = pass }} />
            <div className='login__button' onClick={this.handleLogin}>
              {/* <Link to='/dashboard' className='login__button-text'>Entrar</Link> */}
            </div>
            <div>
              <Link to='/registrarse'>¿No estás registrado aún?</Link>
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
