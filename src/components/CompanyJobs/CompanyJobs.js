import Card from '../Card/Card'
import React, { Component, Fragment } from 'react'
import CardForm from '../CardForm/CardForm'
import Firebase from '../../firebase/Firebase'
export default class CompanyJobs extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.loadJobs = this.loadJobs.bind(this)
    this.confirmJob = this.confirmJob.bind(this)
    this.editJob = this.editJob.bind(this)
    this.getReference = this.getReference.bind(this)
    this.activateCardForm = null
    this.jobsId = []
    this.jobs = []
    this.state = {
      jobs: [],
      jobsId: []
    }
  }

  componentDidMount () {
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  confirmJob (jobValue) {
    this.firebase.addCompanyJob(jobValue)
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  editJob (editValue) {
    this.firebase.editCompanyJob(editValue)
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  deleteJob (cardKey, firebaseReference) {
    firebaseReference.deleteCompanyJob(cardKey)
  }

  loadJobs (jobs) {
    this.jobs = []
    this.jobsId = []
    this.setState({ jobs: [], jobsId: [] })
    if (jobs) {
      this.jobsId = Object.keys(jobs)
      this.jobs = jobs
      this.setState({ jobs: this.jobs, jobsId: this.jobsId })
    }
  }

  getReference (handleFormReference) {
    this.activateCardForm = handleFormReference
  }

  render () {
    return (
      <Fragment>
        <div className='app-container'>
          <div className='grid'>
            {this.state.jobsId.map(job => <Card key={job} data={this.state.jobs[job]} deleteJobCallback={this.deleteJob} editJobCallback={this.activateCardForm} />)}
          </div>
          <CardForm createJobCallback={this.confirmJob} editJobCallback={this.editJob} getReferenceCallback={this.getReference} />
        </div>
      </Fragment>

    )
  }
}
