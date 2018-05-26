// import Card from '../Card/Card'
import React, { Component } from 'react'
import Firebase from '../../firebase/Firebase'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
  }
  componentDidMount () {
    this.firebase.getAllJobs()
  }
  render () {
    return (
      <div className='app-container'>
        <div className='grid'>Hola
        </div>
      </div>
    )
  }
}
