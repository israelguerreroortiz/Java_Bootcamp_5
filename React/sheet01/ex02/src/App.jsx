import React from "react";
import ListaDeProductos from "./ListaDeProductos";
import "./App.css";

function App() {
  const productos = [
    {
      nombre: 'Pelota',
      precio: '15€',
      descripcion: 'De color roja, bota mucho',
    },
    {
      nombre: 'Martillo',
      precio: '20€',
      descripcion: 'Potente y versátil',
    },
    {
      nombre: 'Ordenador',
      precio: '699€',
      descripcion: 'Muy potente, lo tira todo',
    }
  ];
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <ListaDeProductos productos={productos} />
    </div>
  );
}

export default App
