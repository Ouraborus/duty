import Card from '../Card/Card'
import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import './_CompanyJobs.scss'
import Firebase from '../../firebase/Firebase'

export default class CompanyJobs extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    // this.addJob = this.addJob.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.confirmJob = this.confirmJob.bind(this)
    this.resetState = this.resetState.bind(this)
    this.handleCompanyInput = this.handleCompanyInput.bind(this)
    this.handleJobInput = this.handleJobInput.bind(this)
    this.handleDateInput = this.handleDateInput.bind(this)
    this.handleSalaryInput = this.handleSalaryInput.bind(this)
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this)

    this.jobs = []
    this.state = {
      jobs: [],
      formActive: false,
      companyInput: '',
      jobInput: '',
      dateInput: '',
      salaryInput: '',
      descriptionInput: ''

    }
  }
  /*
  addJob () {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
    this.jobs.push({ id: Math.floor(Math.random() * 11),
      companyName: 'Qbano',
      job: 'Mesero',
      date: '01/05/2018 - 03/05/2018',
      salary: 'COP $300.000',
      jobDescription: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.`
    })
    this.setState({ jobs: this.jobs })
  } */

  handleForm (event) {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
  }

  handleCompanyInput (event) {
    this.setState({companyInput: event.target.value})
  }

  handleJobInput (event) {
    this.setState({jobInput: event.target.value})
  }

  handleDateInput (event) {
    this.setState({dateInput: event.target.value})
  }

  handleSalaryInput (event) {
    this.setState({salaryInput: event.target.value})
  }

  handleDescriptionInput (event) {
    this.setState({descriptionInput: event.target.value})
  }

  confirmJob () {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
    let jobValue = {}
    jobValue.company = this.state.companyInput
    jobValue.job = this.state.jobInput
    jobValue.date = this.state.dateInput
    jobValue.salary = this.state.salaryInput
    jobValue.description = this.state.descriptionInput
    const fieldsFlag = this.validateFields(Object.values(jobValue))
    if (!fieldsFlag) {
      window.alert('Faltan campos por llenar')
    } else {
      this.firebase.addCompanyJob(jobValue)
      this.resetState()
    }
  }

  resetState () {
    this.setState((currentState) => {
      return {companyInput: '', jobInput: '', dateInput: '', salaryInput: '', descriptionInput: '', formActive: false}
    })
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
      <div className='app-container'>
        <div className='grid'>
          {this.state.jobs.map(job => <Card key={job.id} />)}
        </div>
        <Button data={{type: 'add', action: this.handleForm}} />
        <Fragment>
          <div className={`jobs__form ${states.formActive}`}>
            <input className='jobs__form-input' placeholder='Nombre Empresa' type='text' value={this.state.companyInput} onChange={this.handleCompanyInput} required ref={(company) => { this.company = company }} />
            <input className='jobs__form-input' placeholder='Cargo' type='text' value={this.state.jobInput} onChange={this.handleJobInput} required ref={(job) => { this.job = job }} />
            <input className='jobs__form-input' placeholder='Fecha' type='text' value={this.state.dateInput} onChange={this.handleDateInput} required ref={(date) => { this.date = date }} />
            <input className='jobs__form-input' placeholder='Salario' type='number' value={this.state.salaryInput} onChange={this.handleSalaryInput} required ref={(salary) => { this.salary = salary }} />
            <input className='jobs__form-input' placeholder='Descripción' type='text' value={this.state.descriptionInput} onChange={this.handleDescriptionInput} required ref={(description) => { this.description = description }} />
            <div className='jobs__button-container'>
              <button className='jobs__form-button' onClick={this.resetState}> Cancelar </button>
              <button className='jobs__form-button' onClick={this.confirmJob}> Confirmar </button>
            </div>
          </div>
        </Fragment>
      </div>
    )
  }
}
