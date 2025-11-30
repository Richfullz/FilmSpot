import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
  const [peliState, setPeliState] = useState({ titulo: "", descripcion: "" });

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    const target = e.target;
    const peli = {
      id: new Date().getTime(),
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    setPeliState(peli);
    setListadoState((prev) => [...prev, peli]);
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">Añadir Pelicula</h3>
      <strong>{peliState.titulo && "Título creado: " + peliState.titulo}</strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Título" required />
        <textarea name="descripcion" placeholder="Descripción" required />
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;