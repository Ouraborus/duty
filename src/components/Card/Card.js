import React, { Component } from 'react'
import './_Card.scss'
export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
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
          <h2 className='card__text card__text--left'>Q'bano</h2>
          <p className='card__text card__text--right'>Mesero</p>
          <p className='card__text card__text--right'>01/01/2018 - 03/01/2018</p>
          <p className='card__text card__text--right'>COP $ 300.000</p>
        </div>
        <div className={`mdl-card__supporting-text ${style.active}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className='mdl-card__actions mdl-card--border'>
          <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' onClick={this.cardHandler}>
            Ver Más
          </a>
        </div>
        <div className='mdl-card__menu'>
          <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
            <i className='material-icons'>delete</i>
          </button>
        </div>
      </div>
    )
  }
}
