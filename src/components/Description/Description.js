import React, { Fragment } from 'react'
import './_Description.scss'
export default function Description () {
  return (
    <Fragment>
      <div className='description'>
        <header>
          <h1 className='description__title'>¿Qué es Duty?</h1>
        </header>
        <p className='description__paragraph'>Duty es un medio para facilitar la generación de ingresos, bien sea para personas que cuenten con un salario o no por medio de redes de interacción digital que promoverán la difusión de proyectos o servicios de todo tipo en la ciudad de Medellín</p>
        <div>
          <h2 className='description__title'>¿De dónde nace?</h2>
        </div>
        <p className='description__paragraph'>Duty nació debido a que identificamos la necesidad que tienen por un lado los empleadores de encontrar gente que sean honestas y responsables. Por otro lado el de las personas comunes que quieren generar ingresos ocasionales.</p>
        <div>
          <h2 className='description__title'>Misión</h2>
        </div>
        <p className='description__paragraph'>Nuestra misión es..</p>
      </div>
    </Fragment>
  )
}
