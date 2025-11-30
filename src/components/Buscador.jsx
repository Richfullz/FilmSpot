import React, { useState } from "react";

const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let pelis_encontradas = listadoState.filter((peli) =>
      peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (busqueda.length <= 1 || pelis_encontradas.length === 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {noEncontrado && busqueda.length > 1 && (
        <span className="no-encontrado">No hay resultados</span>
      )}
      <form>
        <input
          type="text"
          id="search_field"
          value={busqueda}
          autoComplete="off"
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;