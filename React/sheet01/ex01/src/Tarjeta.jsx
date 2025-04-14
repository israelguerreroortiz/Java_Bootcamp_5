import React from 'react';
import './Tarjeta.css';

function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={imagenURL} alt={`${nombre} ${apellido}`} />
      <div className="tarjeta-info">
        <h2>{nombre} {apellido}</h2>
        <p>{ocupacion}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
