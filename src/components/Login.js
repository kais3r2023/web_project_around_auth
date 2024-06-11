import React from 'react'
import UserForm from './UserForm'
import Header from './Header'

export default function Login({email, password}) {
    

  return (
    <>
      <UserForm
        title={"Inicia sesión"}
        buttonText={"Inicia sesíon"}
        linkSpanText={"¿Aun no eres miembro? Regístrate aqui"}
      />
    </>
  )
}
