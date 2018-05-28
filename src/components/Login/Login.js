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
    this.handleKey = this.handleKey.bind(this)
    this.elements = {}
    this.state = {
      redirect: false,
      path: null
    }
    this.firebase = Firebase
  }

  approveLogin (value, context) {
    if (value === false) {
      context.setState({path: '/dashboard'})
    } else {
      context.setState({path: '/trabajos'})
    }
  }

  componentDidMount () {
    this.user.focus()
  }

  handleLogin () {
    if (this.user.value !== '' && this.pass.value !== '') {
      this.firebase.loginUtils(this.user.value, this.pass.value).then(() => {
        const approved = this.firebase.checkUserStatus()
        if (approved) {
          this.firebase.getStatus(this.approveLogin, this)
          this.setState(() => {
            return { redirect: approved }
          })
        }
      })
    } else {
      window.alert('Llene los campos')
    }
  }

  handleKey (event) {
    if (event.key === 'Enter') {
      this.handleLogin()
    }
  }

  render () {
    if (this.state.path !== null) {
      return <Redirect to={this.state.path} />
    }
    return (
      <Fragment>
        <div className='login'>
          <div className='login__image-container' />
          <section className='login__form'>
            <input className='login__form-input' onKeyPress={this.handleKey} placeholder='Username or Email' type='text' required ref={(user) => { this.user = user }} />
            <input className='login__form-input' onKeyPress={this.handleKey} placeholder='Password' type='password' required ref={(pass) => { this.pass = pass }} />
            <button className='login__button' onClick={this.handleLogin} > Entrar </button>
            <div>
              <Link to='/registrarse'>¿No estás registrado aún?</Link>
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
