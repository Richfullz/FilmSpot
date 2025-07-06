import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* <!--Cabecera--> */}
      <header className="header">
        <div className="logo">
          <div className="film-reel">
            <div className="hole hole1"></div>
            <div className="hole hole2"></div>
            <div className="hole hole3"></div>
            <div className="hole hole4"></div>
          </div>
        </div>

        <h1>FilmSpot</h1>
      </header>

      {/* <!--Barra de navegación--> */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* <!--Contenido principal--> */}
      <section id="content" className="content">
        {/* <!--aqui van el listado de peliculas--> */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* <!--Barra lateral--> */}
      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
        <Crear setListadoState={setListadoState} />
      </aside>

      {/* <!--Pie de página--> */}
      <footer className="footer">
        &copy; Todos los derechos reservados Richfullz
      </footer>
    </div>
  );
}

export default App;
