import React, { Component } from 'react'
import './_Card.scss'
export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    console.log(this)
    this.cardHandler = this.cardHandler.bind(this)
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
        <div className='card mdl-card__title'>
          <h2 className='card__text card__text--left'>{this.props.data.company}</h2>
          <p className='card__text card__text--right'>{this.props.data.job}</p>
          <p className='card__text card__text--right'>{this.props.data.startDate + '-' + this.props.data.finishDate}</p>
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
        <div className='mdl-card__menu'>
          <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect card__button'>
            <i className='material-icons'>delete</i>
          </button>
          <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect card__button'>
            <i className='material-icons'>edit</i>
          </button>
        </div>
      </div>
    )
  }
}
