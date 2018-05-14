import React, { Fragment } from 'react'
import './_404.scss'
const NotFound = ({location}) => (
  <Fragment>
    <div className='wrapper'>
      <p> Hey it's me the 404 :D and<b style={{fontSize: '30px'}}>{location.pathname}</b> it's Duty's domain</p>
    </div>
  </Fragment>
)
export default NotFound
