import React, { Component, Fragment } from 'react'
import './_Button.scss'
export default class Button extends Component {
  render () {
    return (
      <Fragment>
        <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored button__add' onClick={this.props.data.action}>
          <i className='material-icons'>{this.props.data.type}</i>
        </button>
      </Fragment>
    )
  }
}
