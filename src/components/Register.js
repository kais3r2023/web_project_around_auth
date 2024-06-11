import React from 'react'
import UserForm from './UserForm'

export default function Register() {
  return (
    <UserForm
      title={"Regístrate"}
      buttonText={"Regístrate"}
      linkSpanText={"¿Ya eres miembro? Inicia sesión aquí"}
      linkSpan={"/signin"}
    />
  )
}
