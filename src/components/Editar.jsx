import React from "react";

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar Pelicula";
  const guardarEdicion = (e, id) => {
    e.preventDefault();

    //conseguir el target del evento
    let target = e.target;
    //Buscar el indice del objeto de la pelicula a actualizar
    const peliculas_almacenadas = conseguirPeliculas();

    const indice = peliculas_almacenadas.findIndex((peli) => peli.id === id);
    // FindIndex es un metodo de Javascript que nos permite buscar por una condición
    // de acuerdo a un objeto dentro de un array de objetos, recorriendo los elementos de un array

    // crear objeto con ese id de ese indice, con titulo y descripcion del formulario
    let peliculas_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    //Actualizar el elemento con ese indice
    peliculas_almacenadas[indice] = peliculas_actualizada;

    //Guardar el nuevo array de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));

    //Actualizar estados
    setListadoState(peliculas_almacenadas);
    setEditar(0);
  };
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;
