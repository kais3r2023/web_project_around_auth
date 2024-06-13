import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

function Header({
  signText, 
  emailLogin,
  routeLink
}) {

  return (
    <header className="header">
      <div className='header__container'>
      <img className="header__logo" id="logo-header" alt="logo header" src={logo}/>
      <p className='header__sign'>{emailLogin}</p>
      <Link to={routeLink} className='header__sign'>{signText}</Link>
      </div>
      <hr className="header__line"/>
    </header>
  )
}

export default Header
