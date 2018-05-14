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

  /* Careful with this function idk if it's a good practice to send the firebase reference or i should sen
    in the props the reference of this instance of CompanyJobs so when the card receives it then it passes back again to the companyJobs
  */
  deleteJob (cardKey, firebaseReference) {
    firebaseReference.deleteCompanyJob(cardKey)
  }

  editJob () {
    console.log('hi')
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

  render () {
    return (
      <Fragment>
        <div className='app-container'>
          <div className='grid'>
            {this.state.jobsId.map(job => <Card key={job} data={this.jobs[job]} deleteJobCallback={this.deleteJob} />)}
          </div>
          <Fragment>
            <CardForm data={this.confirmJob} />
          </Fragment>
        </div>
      </Fragment>

    )
  }
}
