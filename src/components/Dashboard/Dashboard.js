import Card from '../Card/Card'
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

  retrieveJobs (snapshot) {
    console.log(snapshot)
    // console.log(Object.entries(Object.values(Object.values(snapshot))))
    console.log('entries', Object.entries(snapshot))

    this.setState({ jobs: Object.values(snapshot), jobsId: Object.entries(snapshot) })
  }

  componentDidMount () {
    this.firebase.getAllJobs(this.retrieveJobs)
  }

  render () {
    return (
      <div className='app-container'>
        <div className='grid'>
          {/* {this.state.jobsId.map(job => job.map(element => console.log(element)))} */}
          {/* {this.state.jobsId.map(job => console.log(Object.keys(job[1])))} */}
          {/* {this.state.jobsId.map(job => job.map(element => console.log(element)))} */}
        </div>
      </div>
    )
  }
}
