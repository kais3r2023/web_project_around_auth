import React from "react";
import iconSuccess from "../images/success_message.png"
import iconError from "../images/error_message.png"
import iconClose from "../images/Close Icon.png"

export default function InfoTooltip({ 
  
  isSuccess, 
  shoulBeInfoOpen, 
  onClose,
  id

}) {

  const icon = isSuccess ? iconSuccess : iconError;
  const messagge = isSuccess 
      ?'¡Correcto! Ya estás registrado.'
      : 'Uy, algo salió mal. Por favor, inténtalo de nuevo.';



  return (
    <div id={id}
    className={`pop-up ${shoulBeInfoOpen ? "pop-up__open" : ""}`}>
      <div className="pop-up__container">

      <div className="infoTool">
        <img
          src={icon}
          className="infoTool__image"
          alt={"icono que indica el estado del registro"}
        />
        <p className="infoTool__text">{messagge}</p>
      </div>
      <img
          className="pop-up__close-icon btn-close"
          id={`close-icon ${id}`}
          alt="icono de cerrar infoTool"
          src={iconClose}
          onClick={onClose}
        />
    </div>
    </div>
  );
}
