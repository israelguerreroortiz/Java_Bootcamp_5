import React from "react";
import "./Producto.css";

function Producto({ nombre, precio, descripcion }) {
  return (
    <div className="producto-contenedor">
      <h2 className="producto-nombre">{nombre}</h2>
      <p className="producto-precio">{precio}</p>
      <p className="producto-descripcion">{descripcion}</p>
    </div>
  );
}
export default Producto;
