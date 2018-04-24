import React, { Component, Fragment } from 'react'
import Firebase from '../../firebase/Firebase'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import './_login.scss'
import '../../scss/_icon.scss'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      redirect: false
    }
    this.firebase = Firebase
  }

  handleLogin () {
    if (this.user.value !== '' && this.pass.value !== '') {
      this.firebase.loginUtils(this.user.value, this.pass.value)
      const approved = this.firebase.checkUserStatus()
      this.setState(() => {
        return { redirect: approved }
      })
    }
  }

  render () {
    return (
      <Fragment>
        <div className='login'>
          <div className='login__image-container' />
          <section className='login__form'>
            <input className='login__form-input' placeholder='Username or Email' type='text' required ref={(user) => { this.user = user }} />
            <input className='login__form-input' placeholder='Password' type='password' required ref={(pass) => { this.pass = pass }} />
            <button className='login__button' onClick={this.handleLogin}> Entrar {this.state.redirect ? <Redirect to='/dashboard' /> : undefined}
            </button>
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
