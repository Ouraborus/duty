import Card from '../Card/Card'
import React, { Component, Fragment } from 'react'
import Button from '../Button/Button'
import './_CompanyJobs.scss'

export default class CompanyJobs extends Component {
  constructor (props) {
    super(props)
    this.addJob = this.addJob.bind(this)
    this.confirmJob = this.confirmJob.bind(this)
    this.cancelJob = this.cancelJob.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.jobs = []
    this.state = {
      jobs: [],
      formActive: false,
      company: ''
    }
  }

  addJob () {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
    this.jobs.push({ id: '1',
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
  }

  handleChange (event) {
    this.setState({company: event.target.value})
  }

  confirmJob () {
    this.setState((currentState) => {
      return {formActive: !currentState.formActive}
    })
  }

  cancelJob () {
    this.setState((currentState) => {
      return {company: '', formActive: !currentState.formActive}
    })
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
        <Button data={{type: 'add', action: this.addJob}} />
        <Fragment>
          <div className={`jobs__form ${states.formActive}`}>
            <input className='jobs__form-input' placeholder='Nombre Empresa' type='text' value={this.state.company} onChange={this.handleChange} required ref={(company) => { this.company = company }} />
            <input className='jobs__form-input' placeholder='Cargo' type='text' required ref={(job) => { this.job = job }} />
            <input className='jobs__form-input' placeholder='Fecha' type='text' required ref={(date) => { this.date = date }} />
            <input className='jobs__form-input' placeholder='Salario' type='number' required ref={(salary) => { this.salary = salary }} />
            <input className='jobs__form-input' placeholder='Descripción' type='text' required ref={(description) => { this.description = description }} />
            <div className='jobs__button-container'>
              <button className='jobs__form-button' onClick={this.cancelJob}> Cancelar </button>
              <button className='jobs__form-button' onClick={this.confirmJob}> Confirmar </button>
            </div>
          </div>
        </Fragment>
      </div>
    )
  }
}
