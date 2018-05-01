import React, { Component, Fragment } from 'react'
import Firebase from '../../firebase/Firebase'
import { Redirect } from 'react-router'
import './_SignUp.scss'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.state = {
      approved: false,
      isCompany: false
    }
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleSignUp () {
    let values = {}
    values.user = this.user.value
    values.pass = this.pass.value
    values.userName = this.userName.value
    values.userLastName = this.userLastName.value

    if (this.state.isCompany) {
      values.company = this.company.value
      values.nit = this.nit.value
    } else {
      values.age = this.age.value
      values.eps = this.eps.value
    }
    const fieldsFlag = this.validateFields(Object.values(values))
    if (fieldsFlag === false) {
      window.alert('Faltan campos por llenar')
    } else {
      this.firebase.createUser(values)
      this.firebase.addUserData(values)
      this.setState((currentState) => {
        return { approved: !currentState.approved }
      })
    }
  }
  validateFields (values) {
    const flag = values.every(element => element !== '')
    return flag
  }
  handleCheckbox () {
    this.setState((currentState) => {
      return {isCompany: !currentState.isCompany}
    })
  }

  render () {
    const states = {
      isCompany: this.state.isCompany ? '' : 'signup__form-company'
    }
    return (
      <Fragment>
        <div className='signup'>
          <div className='signup__image-container' />
          <section className='signup__form'>
            <input className='signup__form-input' placeholder='Email' type='text' required ref={(user) => { this.user = user }} />
            <input className='signup__form-input' placeholder='Password' type='password' required ref={(pass) => { this.pass = pass }} />
            <input className='signup__form-input' placeholder='Nombres' type='text' required ref={(userName) => { this.userName = userName }} />
            <input className='signup__form-input' placeholder='Apellidos' type='text' required ref={(userLastName) => { this.userLastName = userLastName }} />
            <input className='signup__form-input' placeholder='Edad' type='number' required ref={(age) => { this.age = age }} />
            <input className='signup__form-input' placeholder='EPS' type='text' ref={(eps) => { this.eps = eps }} />
            <div className='signup__form-checkbox'>
              <input type='checkbox' name='isCompany' onClick={this.handleCheckbox} />
              <label>Voy a registrar una empresa</label>
            </div>
            <input className={`signup__form-input ${states.isCompany}`}placeholder='Empresa' type='text' ref={(company) => { this.company = company }} />
            <input className={`signup__form-input ${states.isCompany}`}placeholder='NIT' type='text' ref={(nit) => { this.nit = nit }} />
            <button className='signup__form-button' onClick={this.handleSignUp}> Registrarse {this.state.approved ? <Redirect to='/dashboard' /> : ''}
            </button>
          </section>
        </div>
      </Fragment>
    )
  }
}
