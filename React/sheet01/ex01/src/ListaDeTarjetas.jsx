import React from "react";
import Tarjeta from "./Tarjeta";
import './ListaDeTarjetas.css'

function ListaDeTarjetas({personas}) {
  return (
    <div className="lista-tarjetas">
        {personas.map((persona, index) => {
            return (
                <Tarjeta
                key={index}
                nombre={persona.nombre}
                apellido={persona.apellido}
                ocupacion={persona.ocupacion}
                imagenURL={persona.imagenUrl}
                />
            );
        })}
    </div>
  );
}

export default ListaDeTarjetas;
