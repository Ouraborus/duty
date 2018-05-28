import UserCard from '../UserCard/UserCard'
import React, { Component } from 'react'
import Firebase from '../../firebase/Firebase'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.state = {
      jobsId: [],
      jobs: []
    }
    this.retrieveJobs = this.retrieveJobs.bind(this)
  }

  retrieveJobs (jobsId, jobs) {
    this.setState({ jobs: jobs, jobsId: jobsId })
  }

  componentDidMount () {
    this.firebase.getAllJobs(this.retrieveJobs)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='grid'>
          { this.state.jobsId.map((job, i) => {
            return <UserCard key={job} data={this.state.jobs[i]} type={false} />
          }) }
        </div>
      </div>
    )
  }
}
