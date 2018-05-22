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
    this.elements = {}
    this.state = {
      redirect: false
    }
    this.firebase = Firebase
  }

  /*
  approveLogin (value, context) {
    if (value === false) {
      context.elements.status = value
    } else {
      context.elements.status = true
    }
    console.log(context.elements.status)
  }

  handleLogin () {
    if (this.user.value !== '' && this.pass.value !== '') {
      this.firebase.loginUtils(this.user.value, this.pass.value)
      const approved = this.firebase.checkUserStatus()
      if (approved) {
        this.firebase.getStatus(this.approveLogin, this)
        this.setState(() => {
          return { redirect: approved }
        })
      }
    } else {
      window.alert('llene los campos')
    }
  } */

  componentDidMount () {
    const isLogged = this.firebase.checkUserStatus()
    console.log(isLogged)
    if (isLogged) {
      return <Redirect to='/trabajos' />
    }
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
            {/* <button className='login__button' onClick={this.handleLogin}> Entrar {this.elements.status ? console.log('Empresa') : console.log('Persona')} */}
            <button className='login__button' onClick={this.handleLogin}> Entrar {this.state.redirect ? <Redirect to='/trabajos' /> : undefined}
            </button>
            <div>
              <Link to='/registrarse'>¿No estás registrado aún?</Link>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
// <Redirect to='/trabajos' />
