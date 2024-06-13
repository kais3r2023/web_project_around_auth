import React,{useEffect, useState} from 'react'
import UserForm from './UserForm'
import InfoTooltip from './InfoTooltip'
import { useLocation } from 'react-router-dom'

export default function Login() {
  const location = useLocation();

  // States
  const[successRegister, setSuccessRegister] = useState(false)
  const[shoulBeInfoOpen, setShouldBeInfoOpen] = useState(false)
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  // funcion para Cerrar Tooltip
  function closeInfoTooltip(){
    setShouldBeInfoOpen(false)
  }

  // funcion para abrir el Info Tooltip si el registro fue exitoso
  useEffect(()=>{
    if(location.state === 'success'){
      setSuccessRegister(true)
      setShouldBeInfoOpen(true)
    }
  },[location.state]);

  //Manipulacion del submit del Formulario

  return (
    <>
      <UserForm
        title={"Inicia sesión"}
        buttonText={"Inicia sesíon"}
        linkSpanText={"¿Aun no eres miembro? Regístrate aqui"}
        linkSpan={"/signup"}
      />
      <InfoTooltip
        isSuccess={successRegister}
        shoulBeInfoOpen={shoulBeInfoOpen}
        onClose={closeInfoTooltip}
      />
    </>
  )
}
