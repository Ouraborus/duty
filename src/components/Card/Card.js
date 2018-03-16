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
      <div className='grid'>
        <div className=' card-wide mdl-card mdl-shadow--2dp'>
          <div className='card mdl-card__title'>
            <h2 className='card__text card__text--left'>Q'bano</h2>
            <p className='card__text card__text--right'>Mesero</p>
            <p className='card__text card__text--right'>01/01/2018 - 03/01/2018</p>
            <p className='card__text card__text--right'>COP $ 300.000</p>
          </div>
          <div className='mdl-card__supporting-text'>
        Se requiere mesero...
          </div>
          <div className='mdl-card__actions mdl-card--border'>
            <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'>
            Ver Más
            </a>
          </div>
          <div className='mdl-card__menu'>
            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
              <i className='material-icons'>delete</i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
