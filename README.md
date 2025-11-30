# 🎬 FilmSpot  
*CRUD de películas con React + localStorage*

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![license](https://img.shields.io/badge/license-MIT-green)

> Crea, busca, edita y borra películas sin backend.  

---

## ⚡ Instalación
git clone https://github.com/Richfullz/FilmSpot.git
cd FilmSpot
npm install
npm start

---

## 📁 Estructura
- Copy
- src/
- ├─ components/   Buscador | Crear | Editar | Listado
- └─ helpers/      GuardarEnStorage.js

---

## 🔍 Qué hace cada componente
 <details>
 <summary>📸 App (layout general)</summary>
 <img width="662" height="743" alt="header+y lateral" src="https://github.com/user-attachments/assets/ae2ead20-c4a2-42c7-888f-d6c88835224a" />
 <img width="482" height="341" alt="form crear" src="https://github.com/user-attachments/assets/6582bc5c-da3e-4f62-bc77-e13fa82d17a7" />
  <br/>
 Cabecera con logo personalizado, navegación, zona de contenido (listado) y barra lateral (buscador + form crear).
 </details>
 <details>
 <summary>🔎 Buscador (filtro en tiempo real)</summary>
 <img width="652" height="683" alt="Captura de pantalla 2025-07-11 102416" src="https://github.com/user-attachments/assets/3594072a-6336-49ae-87d7-f1a229cfddd5" />
  <br/>
 Estado local busqueda + noEncontrado.
 Filtra por título; si no hay coincidencias restaura la lista original y muestra «No hay resultados».
 </details>
 <details>
 <summary>➕ Crear (nueva película)</summary>
 <img width="642" height="768" alt="crear" src="https://github.com/user-attachments/assets/6fbc6e68-dcf5-4284-834d-0cca367123da" />
  <br/>
 Formulario simple (título + descripción).
 Genera id único con Date.now(), actualiza el estado global y persiste en localStorage vía GuardarEnStorage.
 </details>
 <details>
 <summary>✏️ Editar (inline)</summary>
 <img width="680" height="742" alt="editar" src="https://github.com/user-attachments/assets/6a61e19e-ad79-44d1-960a-c0fc5013e412" />
  <br/>
 Botón Editar abre formulario inline.
 Usa findIndex para localizar la película por id, reemplaza el elemento, vuelca el array a localStorage y cierra el formulario (setEditar(0)).
 </details>
 <details>
 <summary>📜 Listado + Borrar</summary>
 <img width="742" height="822" alt="listado" src="https://github.com/user-attachments/assets/f86f5960-4c52-4847-b857-51159533eff9" />
  <br/>
 Muestra todas las películas.
 Simula carga 2 s con setTimeout / spinner.
 Borrado: filter por id y actualiza localStorage.
 </details>
 <details>
 <summary>💾 GuardarEnStorage (helper)</summary>
 <img width="885" height="567" alt="helper" src="https://github.com/user-attachments/assets/6d960a93-dbe8-4554-b76c-c08981f47dc7" />
  <br/>
 Si ya existe array en localStorage → push.
 Si no → crea array con el nuevo elemento.
 Devuelve el elemento guardado.
 </details>

---

## 🛠 Tecnologías
- React 18
- Node.js (entorno de desarrollo)
- localStorage (persistencia)

---

# 🚀 Roadmap / Mejoras futuras
- [ ] Base de datos real + registro de usuarios
- [ ] Subida de carátulas
- [ ] Roles: usuario / administrador
- [ ] Sección de opiniones / valoraciones
- [ ] Barra de navegación mejorada
- [ ] Página de documentación / «¿Qué es FilmSpot?»

---

## 🚀 Cómo desplegué a GitHub Pages
1. Instalé gh-pages como devDependency:
npm install -D gh-pages
2. Añadí en package.json:
JSON
Copy
"homepage": "https://richfullz.github.io/FilmSpot"
y los scripts:
JSON
Copy
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
Ejecuté:
bash
Copy
npm run deploy
3. GitHub compila y sirve la carpeta build automáticamente en la rama gh-pages.
Copy
- Commit & push:
git add README.md
git commit -m "docs: añadido link de demo y pasos de deploy"
git push origin main

---

# 📄 Licencia
© GitHub: Richfullz
© LinkedIn: Alejandro Pascual
