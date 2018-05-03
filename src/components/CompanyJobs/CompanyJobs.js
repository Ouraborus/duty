import Card from '../Card/Card'
import React, { Component } from 'react'
import Button from '../Button/Button'

export default class CompanyJobs extends Component {
  constructor (props) {
    super(props)
    this.addJob = this.addJob.bind(this)
    this.jobs = []
    this.state = {
      jobs: []
    }
  }

  addJob () {
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

  render () {
    console.log(this)
    return (
      <div className='app-container'>
        <div className='grid'>
          {this.state.jobs.map(job => <Card key={job.id} />)}
        </div>
        <Button data={{type: 'add', action: this.addJob}} />
      </div>
    )
  }
}
