import React from 'react'
import UserForm from './UserForm'

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
