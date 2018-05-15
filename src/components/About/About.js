import React, { Fragment } from 'react'
import './_About.scss'
export default function About () {
  return (
    <Fragment>
      <div className='about'>
        <p className='about__title'><b>Duty</b></p>
        <div className='about__container'>
          <p className='about__text about__text--italic'>Un medio para facilitar la generación de ingresos.</p>
          <p className='about__text'>Soportamos una comunidad que permite la comunicación entre Empleados y Empleadores Temporales.</p>
        </div>
        <hr className='about__hr' />
        <p className='about__title about__title--medium' ><b>Nuestro Equipo</b></p>
        <div className='about__container about__members'>
          <div className='about__description'>
            <img src='https://i.imgur.com/gO0tw8Y.jpg' alt='Esteban Cardona' className='about__img' />
            <p className='about__text about__text--italic'>"Texto"</p>
          </div>
          <div className='about__description'>
            <img src='https://i.imgur.com/rZZ6sX9.jpg' alt='Alejandro Villa' className='about__img' />
            <p className='about__text about__text--italic'>"Texto"</p>
          </div>
          <div className='about__description'>
            <img src='https://i.imgur.com/zawtl79.jpg' alt='Pablo Wolff' className='about__img' />
            <p className='about__text about__text--italic'>"Texto"</p>

          </div>
        </div>
      </div>

    </Fragment>
  )
}
