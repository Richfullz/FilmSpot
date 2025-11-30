import React from "react";

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const guardarEdicion = (e, id) => {
    e.preventDefault();

    const peliculas_almacenadas = conseguirPeliculas();
    const indice = peliculas_almacenadas.findIndex((p) => p.id === id);

    peliculas_almacenadas[indice] = {
      id,
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas));
    setListadoState(peliculas_almacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">Editar Pelicula</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input type="text" name="titulo" defaultValue={peli.titulo} required />
        <textarea name="descripcion" defaultValue={peli.descripcion} required />
        <input type="submit" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;