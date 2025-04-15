import React from "react";
import ListaDeTarjetas from "./ListaDeTarjetas";
import "./App.css";

function App() {
  const personas = [
    {
      nombre: "Julián",
      apellido: "Alvarez",
      ocupacion: "Futbolista",
      imagenUrl: "https://www.directvsports.com/__export/1741622809677/sites/dsports/img/2025/03/10/juli-n_-lvarez_2025_-1-.png_498251857.png",
    },
    {
      nombre: "Fernando",
      apellido: "Alonso",
      ocupacion: "Piloto F1",
      imagenUrl:
        "https://images.daznservices.com/di/library/DAZN_News/97/25/fernando-alonso-ferrari-f1_z0dtc736uawf1lfb1q3gh5r8v.jpg?t=-258795478",
    },
    {
      nombre: "Marc",
      apellido: "Marquez",
      ocupacion: "Piloto MotoGP",
      imagenUrl:
        "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/11/marc-marquez-3221254.jpg?tf=3840x"
    }
  ];
  return (
    <div className="App">
      <h1>Tarjetas de Presentación</h1>
      <ListaDeTarjetas personas={personas} />
    </div>
  );
}

export default App;
