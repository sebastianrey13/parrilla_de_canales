import React from 'react'
import Header from '../componentes/Header'
import { Outlet } from 'react-router-dom'
import logoAzul from '../../public/images/Logo_Tigo.png'
import { Link } from 'react-router-dom'

const Home = () => {




  const parrillasDeCanales = [
    {
      id: 1,
      nombre: 'Tigo Especial',
      link: 'tigo-especial'
    },
    {
      id: 2,
      nombre: 'Tigo Avanzada',
      link: 'tigo-avanzada'
    },
  ]




  return (
    <div className='home'>
      <div className='homeTitulo'>
        <h2>Conoce la guía de canales Tigo | Hogar</h2>
        {/* <img src={logoAzul} alt="" /> */}
      </div>
      <p className='home-descripcion'>Conoce la guía de canales que hace parte de tu <b>plan de Televisión Tigo</b> y disfruta de tus programas favoritos</p>
      <div className='home-parrillas'>

        {parrillasDeCanales.map((props, index) => (
          <Link to={`/${props.link}`}>
            <div className='home-nombreParrilla' key={index}>
              <h3>{props.nombre}</h3>
            </div>
          </Link>
        ))}

      </div>

    </div>
  )
}

export default Home