import React from 'react'
import { Link } from 'react-router-dom'

export default function UserForm({
  title,
  buttonText,
  linkSpanText,
  linkSpan
}) {
  return (
      <form className='userForm'>
        <h3 className='userForm__title'>
          {title}
        </h3>
        <div className='userForm__input-container'>
        <input 
          className= 'userForm__input'
          type = 'email'
          placeholder='Correo electrónico'
          required
        />
        <input 
          className= 'userForm__input'
          type = 'password'
          placeholder='Contraseña'
          required
        />
        </div>
        <button 
          type='submit'
          className='userForm__submit-btn'
        >
          {buttonText}
        </button>
        <a href={linkSpan} className='userForm__span-text'>{linkSpanText}</a>
      </form>
      
  )
}
