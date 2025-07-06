import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Pelicula 1"; //Titulo del componente
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    //conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //Guardo el estado
    setPeliState(peli);
    console.log(peliState);

    //Actualizar estado del listado principal
    setListadoState((elementos) => {
      return [...elementos, peli];
    });

    //guardar en el almacenamiento local
    GuardarEnStorage("pelis", peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>{titulo && descripcion && "Titulo creado: " + titulo}</strong>
        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="title" placeholder="Titulo" name="titulo" />
          <textarea
            id="description"
            placeholder="Descripción"
            name="descripcion"
          ></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  );
};

export default Crear;
