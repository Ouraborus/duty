import React, { Component, Fragment } from 'react'
import './_NavBar.scss'
export default class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }
  render () {
    return (
      <Fragment>
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
          <header className='mdl-layout__header'>
            <div className='mdl-layout__header-row'>
              <span className='mdl-layout-title'>Duty</span>
            </div>
          </header>
          <div className='mdl-layout__drawer'>
            <span className='mdl-layout-title'>Duty</span>
            <nav className='mdl-navigation'>
              <a className='mdl-navigation__link' href=''>Dashboard</a>
              <a className='mdl-navigation__link' href=''>Contacto</a>
              <a className='mdl-navigation__link' href=''>Acerca</a>
            </nav>
          </div>
        </div>
      </Fragment>
    )
  }
}
