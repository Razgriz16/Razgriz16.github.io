import React, { useState } from "react";
import "./navbar.css"; 
import Logo from "../../assets/logo_ucm_marca.png"; 

function Navbar(props) {

  const [menuHamburguesaDesplegado, setMenuHamburguesaDesplegado] = useState(false);
  const [menuUsuarioDesplegado, setMenuUsuarioDesplegado] = useState(false);

  const toggleMenuHamburguesa = () => {
    setMenuHamburguesaDesplegado(!menuHamburguesaDesplegado);
    setMenuUsuarioDesplegado(false); 
  };

  const toggleMenuUsuario = () => {
    setMenuUsuarioDesplegado(!menuUsuarioDesplegado);
    setMenuHamburguesaDesplegado(false); 
  };

  const handleCerrarSesion = () => {
    console.log("Sesión cerrada");
  };

  return (
    <div className="header">
      <button onClick={toggleMenuHamburguesa} className="header-toggle2">
      ☰ 
      </button>
      <div className={`headeer-menu ${menuHamburguesaDesplegado ? "header-abierto" : ""}`}>
        <ul className={`opciones ${menuHamburguesaDesplegado ? "mostrar" : ""}`}>
          <li>Realizar postualción</li>
          <li>Modificar postulaciones</li>
          <li>Eliminar postulaciones</li>
          <li>Resultados de la postulación</li>
        </ul>
      </div>
      <img className="logo_ucm" src={Logo} alt="Logo" />
      <button onClick={toggleMenuUsuario} className="header-toggle">
        
      </button>
      <div className={`header-menu ${menuUsuarioDesplegado ? "header-abierto" : ""}`}>
        <ul>
          <li>Cambiar Contraseña</li>
          <li onClick={handleCerrarSesion}>Cerrar Sesión</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;