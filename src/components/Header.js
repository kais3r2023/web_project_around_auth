import React from 'react'
import logo from '../images/logo.png'
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
      <a href= {routeLink} className='header__sign'>{signText}</a>
      </div>
      <hr className="header__line"/>
    </header>
  )
}

export default Header
