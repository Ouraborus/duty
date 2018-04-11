import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Firebase } from '../../firebase/Firebase'
import './_login.scss'
import '../../scss/_icon.scss'

export default class Login extends Component {
  constructor () {
    super()
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      redirect: false
    }
    this.firebase = new Firebase()
  }

  handleLogin () {
    this.firebase.loginUtils(this.user.value, this.pass.value)
    const approved = this.firebase.checkUserStatus()
    console.log(approved)
    this.setState(() => {
      return { redirect: approved }
    })
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
              {this.state.redirect ? (<Redirect to='/dashboard' />) : (console.log(this))}
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
