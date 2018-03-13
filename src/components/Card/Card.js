import React, { Component } from 'react'
import './_Card.scss'
export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }
  render () {
    return (
      <div className='card-wide mdl-card mdl-shadow--2dp'>
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>Q'bano</h2>
        </div>
        <div className='mdl-card__supporting-text'>
        Se requiere mesero...
        </div>
        <div className='mdl-card__actions mdl-card--border'>
          <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'>
            Get Started
          </a>
        </div>
        <div className='mdl-card__menu'>
          <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
            <i className='material-icons'>share</i>
          </button>
        </div>
      </div>
    )
  }
}
