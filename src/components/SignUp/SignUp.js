import React, { Component, Fragment } from 'react'
import Firebase from '../../firebase/Firebase'
import { Redirect } from 'react-router'
import './_SignUp.scss'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.state = {
      approved: false
    }
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignUp () {
    this.firebase.createUser(this.user.value, this.pass.value)
    this.firebase.addUserData(this.userName.value)
    this.setState((currentState) => {
      return { approved: !currentState.approved }
    })
  }

  render () {
    return (
      <Fragment>
        <div className='signup'>
          <div className='signup__image-container' />
          <section className='signup__form'>
            <input className='signup__form-input' placeholder='Username or Email' type='text' required ref={(user) => { this.user = user }} />
            <input className='signup__form-input' placeholder='Password' type='password' required ref={(pass) => { this.pass = pass }} />
            <input className='signup__form-input' placeholder='Nombres' type='text' required ref={(userName) => { this.userName = userName }} />
            <input className='signup__form-input' placeholder='Apellidos' type='text' required />
            <input className='signup__form-input' placeholder='Edad' type='number' required />
            <input className='signup__form-input' placeholder='Lugar de trabajo' type='text' required />
            <button className='signup__form-button' onClick={this.handleSignUp}> Registrarse {this.state.approved ? <Redirect to='/dashboard' /> : ''}
            </button>
          </section>
        </div>
      </Fragment>
    )
  }
}
