import Card from '../Card/Card'
import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import './_CompanyJobs.scss'
import Firebase from '../../firebase/Firebase'

export default class CompanyJobs extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.loadJobs = this.loadJobs.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.confirmJob = this.confirmJob.bind(this)
    this.resetState = this.resetState.bind(this)
    this.handleCompanyInput = this.handleCompanyInput.bind(this)
    this.handleJobInput = this.handleJobInput.bind(this)
    this.handleStartDateInput = this.handleStartDateInput.bind(this)
    this.handleFinishDateInput = this.handleFinishDateInput.bind(this)
    this.handleSalaryInput = this.handleSalaryInput.bind(this)
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this)
    // this.callbackFirebase = this.callbackFirebase.bind(this)
    this.jobsId = []
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

  handleStartDateInput (event) {
    this.setState({startDateInput: event.target.value})
  }
  handleFinishDateInput (event) {
    this.setState({finishDateInput: event.target.value})
  }

  handleSalaryInput (event) {
    this.setState({salaryInput: event.target.value})
  }

  handleDescriptionInput (event) {
    this.setState({descriptionInput: event.target.value})
  }

  confirmJob () {
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
      this.firebase.addCompanyJob(jobValue)
      this.firebase.getCompanyJobs(this.loadJobs)
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

  loadJobs (jobs) {
    this.jobsId = Object.keys(jobs)
    this.jobs = jobs
    this.setState({ jobs: this.jobs })
  }

  componentDidMount () {
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  render () {
    const states = {
      formActive: this.state.formActive ? 'jobs__form--active' : ''
    }
    return (
      <div className='app-container'>
        <div className='grid'>
          {this.jobsId.map(job => <Card key={job} data={this.jobs[job]} />)}
        </div>
        <Button data={{type: 'add', action: this.handleForm}} />
        <Fragment>
          <div className={`jobs__form ${states.formActive}`}>
            <input className='jobs__form-input' placeholder='Nombre Empresa' type='text' value={this.state.companyInput} onChange={this.handleCompanyInput} required />
            <input className='jobs__form-input' placeholder='Cargo' type='text' value={this.state.jobInput} onChange={this.handleJobInput} required />
            <label className='jobs__form-label' >Fecha inicio</label>
            <input className='jobs__form-input' placeholder='Fecha Inicio' type='date' value={this.state.startDateInput} onChange={this.handleStartDateInput} required />
            <label className='jobs__form-label' >Fecha finalización</label>
            <input className='jobs__form-input' placeholder='Fecha Finalización' type='date' value={this.state.finishDateInput} onChange={this.handleFinishDateInput} required />
            <input className='jobs__form-input' placeholder='Salario' type='number' value={this.state.salaryInput} onChange={this.handleSalaryInput} required />
            <input className='jobs__form-input' placeholder='Descripción' type='text' value={this.state.descriptionInput} onChange={this.handleDescriptionInput} required />
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
