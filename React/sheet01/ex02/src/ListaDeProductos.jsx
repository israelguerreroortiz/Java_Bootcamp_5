import { userState } from "react";
import Producto from "./Producto";
import "./ListaDeProductos.css";

function ListaDeProductos({productos}) {
  return (
  <section className="lista-productos">
    {productos.map((producto, index) => {
        return (
            <Producto
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion} 
            />
        );
    })}
  </section>
  );
}

export default ListaDeProductos;
