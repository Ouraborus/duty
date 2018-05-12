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

  confirmJob (jobValue) {
    this.firebase.addCompanyJob(jobValue)
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  loadJobs (jobs) {
    if (jobs) {
      this.jobsId = Object.keys(jobs)
      this.jobs = jobs
      this.setState({ jobs: this.jobs, jobsId: this.jobsId })
    } else {
      this.setState({ jobs: this.jobs, jobsId: this.jobsId })
      console.log('No hay trabajos')
    }
  }

  componentDidMount () {
    this.firebase.getCompanyJobs(this.loadJobs)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='grid'>
          {this.state.jobsId.map(job => <Card key={job} data={this.jobs[job]} />)}
        </div>
        <Fragment>
          <CardForm data={this.confirmJob} />
        </Fragment>
      </div>
    )
  }
}
