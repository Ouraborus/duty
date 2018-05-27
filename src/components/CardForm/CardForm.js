import React, { Component, Fragment } from 'react'
import './_CardForm.scss'
import Button from '../Button/Button'

export default class CardForm extends Component {
  constructor (props) {
    super(props)
    this.handleForm = this.handleForm.bind(this)
    this.resetState = this.resetState.bind(this)
    this.createCard = this.createCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.captureData = this.captureData.bind(this)
    this.confirm = this.confirm.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

    this.date = this.getDate()

    this.state = {
      formActive: false,
      isAnUpdate: false,
      jobId: undefined,
      companyInput: '',
      jobInput: '',
      salaryInput: '',
      descriptionInput: '',
      startDateInput: '',
      finishDateInput: ''
    }
  }

  handleForm (isAnUpdate, jobId) {
    const data = isAnUpdate === true
    this.setState((currentState) => {
      return {formActive: !currentState.formActive, isAnUpdate: data, jobId: jobId}
    })
  }

  handleInputChange (event) {
    this.setState({[event.target.name]: event.target.value})
  }
  confirm () {
    return this.state.isAnUpdate ? this.updateCard() : this.createCard()
  }

  captureData () {
    this.setState({formActive: false})
    return {
      jobId: this.state.jobId,
      company: this.state.companyInput,
      job: this.state.jobInput,
      startDate: this.state.startDateInput,
      finishDate: this.state.finishDateInput,
      salary: this.state.salaryInput,
      description: this.state.descriptionInput
    }
  }

  createCard () {
    const jobValue = this.captureData()
    const fieldsFlag = this.validateFields(Object.values(jobValue))
    if (!fieldsFlag) {
      window.alert('Faltan campos por llenar')
    } else {
      this.props.createJobCallback(jobValue)
      this.resetState()
    }
  }
  updateCard () {
    const updateValue = this.captureData()
    this.setState({isAnUpdate: undefined, jobId: undefined})
    const fieldsFlag = this.validateFields(Object.values(updateValue))
    if (!fieldsFlag) {
      window.alert('Faltan campos por llenar')
    } else {
      this.props.editJobCallback(updateValue)
      this.resetState()
    }
  }

  resetState () {
    this.setState({companyInput: '', jobInput: '', salaryInput: '', descriptionInput: '', formActive: false, isAnUpdate: false})
  }

  validateFields (values) {
    const flag = values.every(element => element !== '')
    return flag
  }

  componentDidMount () {
    this.props.getReferenceCallback(this.handleForm)
  }
  getDate () {
    return new Date(Date.now() - 86400000).toISOString().substring(0, 10)
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
          <input className='jobs__form-input' placeholder='Fecha Inicio' type='date' min={this.date} value={this.state.startDateInput} name='startDateInput' onChange={this.handleInputChange} required />
          <label className='jobs__form-label' >Fecha finalización</label>
          <input className='jobs__form-input' placeholder='Fecha Finalización' type='date' min={this.date} value={this.state.finishDateInput} name='finishDateInput' onChange={this.handleInputChange} required />
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
