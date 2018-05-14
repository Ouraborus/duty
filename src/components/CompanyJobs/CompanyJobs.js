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

  deleteJob (cardKey, firebaseReference) {
    firebaseReference.deleteCompanyJob(cardKey)
  }

  editJob () {

  }

  loadJobs (jobs) {
    if (jobs) {
      this.jobsId = Object.keys(jobs)
      this.jobs = jobs
      this.setState({ jobs: this.jobs, jobsId: this.jobsId })
    } else {
      this.setState({ jobs: [], jobsId: [] })
      console.log('No hay trabajos')
    }
  }

  render () {
    return (
      <Fragment>
        <div className='app-container'>
          <div className='grid'>
            {this.state.jobsId.map(job => <Card key={job} data={this.jobs[job]} deleteJobCallback={this.deleteJob} editJobCallback={this.editJob} />)}
          </div>
          <CardForm data={this.confirmJob} />
        </div>
      </Fragment>

    )
  }
}
