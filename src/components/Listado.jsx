import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      conseguirPeliculas();
      setLoading(false);
    }, 2000);
  }, []);

  const conseguirPeliculas = () => {
    const pelis = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(pelis);
    return pelis;
  };

  const borrarPeli = (id) => {
    const pelis_almacenadas = conseguirPeliculas();
    const nuevo_array = pelis_almacenadas.filter((p) => p.id !== parseInt(id));
    setListadoState(nuevo_array);
    localStorage.setItem("pelis", JSON.stringify(nuevo_array));
  };

  if (loading)
    return (
      <div className="load">
        <span className="loader"></span>
        <p>Cargando películas...</p>
      </div>
    );

  if (!listadoState || listadoState.length === 0)
    return <h2>No hay películas para mostrar</h2>;

  return listadoState.map((peli) => (
    <article key={peli.id} className="peli-item">
      <h3 className="title">{peli.titulo}</h3>
      <p className="description">{peli.descripcion}</p>
      <button className="edit" onClick={() => setEditar(peli.id)}>
        Editar
      </button>
      <button className="delete" onClick={() => borrarPeli(peli.id)}>
        Borrar
      </button>
      {editar === peli.id && (
        <Editar
          peli={peli}
          conseguirPeliculas={conseguirPeliculas}
          setEditar={setEditar}
          setListadoState={setListadoState}
        />
      )}
    </article>
  ));
};

export default Listado;