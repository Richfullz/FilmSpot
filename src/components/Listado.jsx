import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      conseguirPeliculas();
      setLoading(false);
    }, 2000);
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };
  const borrarPeli = (id) => {
    // alert(id);
    // Conseguir peliculas Almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    // Filtrar esas peliculas para que elimine del array la que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    console.log(pelis_almacenadas, nuevo_array_pelis);
    // Actualizar el estado del listado
    setListadoState(nuevo_array_pelis);
    // Actualizar los datos en el LocalStorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };
  return (
    <>
      {loading ? (
        <div className="load">
          <span className="loader"></span>
          <p className="texto-load">Cargando películas...</p>
        </div>
      ) : listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/*Aparece formulario de editar */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
