import React from 'react'

function CardCanal(props) {

  return (
    <div className='cardCanal'>
      <p className='cardCanal-numero'>{props.canal}</p>
      <img src={props.img} alt={props.nombre} />
      <p className='cardCanal-nombre'>{props.nombre}</p>
    </div>
  )
}

export default CardCanal