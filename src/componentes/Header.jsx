import React from 'react'
import { Link } from 'react-router-dom'

import logoBlanco from '../../public/images/logo_tigo_letras_blancas.png'

const Header = () => {

  return (
    <div className='header'>
      <Link to={'/home'}>
        <img src={logoBlanco} alt="logo-blanco" />
      </Link>

    </div>
  )
}

export default Header