import React, { Component, Fragment } from 'react'
import './_CardForm.scss'
import Button from '../Button/Button'

export default class CardForm extends Component {
  constructor (props) {
    super(props)
    this.handleForm = this.handleForm.bind(this)
    this.resetState = this.resetState.bind(this)
    this.confirm = this.confirm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.state = {
      formActive: false,
      companyInput: '',
      jobInput: '',
      dateInput: '',
      salaryInput: '',
      descriptionInput: ''
    }
  }

  handleForm (event) {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
  }

  handleInputChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }

  confirm () {
    this.setState({formActive: false})
    let jobValue = {}
    jobValue.company = this.state.companyInput
    jobValue.job = this.state.jobInput
    jobValue.startDate = this.state.startDateInput
    jobValue.finishDate = this.state.finishDateInput
    jobValue.salary = this.state.salaryInput
    jobValue.description = this.state.descriptionInput
    const fieldsFlag = this.validateFields(Object.values(jobValue))
    if (!fieldsFlag) {
      window.alert('Faltan campos por llenar')
    } else {
      this.props.data(jobValue)
      this.resetState()
    }
  }

  resetState () {
    this.setState({companyInput: '', jobInput: '', salaryInput: '', descriptionInput: '', formActive: false})
  }

  validateFields (values) {
    const flag = values.every(element => element !== '')
    return flag
  }

  render () {
    const states = {
      formActive: this.state.formActive ? 'jobs__form--active' : ''
    }
    return (
      <Fragment>
        <Button data={{type: 'add', action: this.handleForm}} />
        <div className={`jobs__form ${states.formActive}`}>
          <input className='jobs__form-input' placeholder='Nombre Empresa' type='text' value={this.state.companyInput} name='companyInput' onChange={this.handleInputChange} required />
          <input className='jobs__form-input' placeholder='Cargo' type='text' value={this.state.jobInput} name='jobInput' onChange={this.handleInputChange} required />
          <label className='jobs__form-label' >Fecha inicio</label>
          <input className='jobs__form-input' placeholder='Fecha Inicio' type='date' value={this.state.startDateInput} name='startDateInput' onChange={this.handleInputChange} required />
          <label className='jobs__form-label' >Fecha finalización</label>
          <input className='jobs__form-input' placeholder='Fecha Finalización' type='date' value={this.state.finishDateInput} name='finishDateInput' onChange={this.handleInputChange} required />
          <input className='jobs__form-input' placeholder='Salario' type='number' value={this.state.salaryInput} name='salaryInput' onChange={this.handleInputChange} required />
          <input className='jobs__form-input' placeholder='Descripción' type='text' value={this.state.descriptionInput} name='descriptionInput' onChange={this.handleInputChange} required />
          <div className='jobs__button-container'>
            <button className='jobs__form-button' onClick={this.resetState}> Cancelar </button>
            <button className='jobs__form-button' onClick={this.confirm}> Confirmar </button>
          </div>
        </div>
      </Fragment>
    )
  }
}
