import React, { Component } from 'react'
import './_UserCard.scss'
import Firebase from '../../firebase/Firebase'
export default class UserCard extends Component {
  constructor (props) {
    super(props)
    this.firebase = Firebase
    this.cardHandler = this.cardHandler.bind(this)
    this.state = {
      active: false
    }
  }
  cardHandler () {
    this.setState((currentState) => {
      return {active: !currentState.active}
    })
  }

  render () {
    const style = {
      active: this.state.active ? 'mdl-card__supporting-text--active' : ''
    }
    return (
      <div className=' card-wide mdl-card mdl-shadow--2dp'>
        <div className='card mdl-card__title' style={{backgroundImage: `url(${this.props.data.image})`}}>
          <h2 className='card__text card__text--left'>{this.props.data.company}</h2>
          <p className='card__text card__text--right'>{this.props.data.job}</p>
          <p className='card__text card__text--right'>{this.props.data.startDate + ' - ' + this.props.data.finishDate}</p>
          <p className='card__text card__text--right'>COP $ {this.props.data.salary}</p>
        </div>
        <div className={`mdl-card__supporting-text ${style.active}`}>
          {this.props.data.description}
        </div>
        <div className='mdl-card__actions mdl-card--border'>
          <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' onClick={this.cardHandler}>
            Ver Más
          </a>
        </div>
      </div>
    )
  }
}
