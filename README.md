# FILMSPOT
## PROYECTO DE ARTICULOS DE CINE CREADA CON REACT
### ![image](https://github.com/user-attachments/assets/03b09a8f-16bf-4370-aeb0-f224c5bad0b8)
### ![image](https://github.com/user-attachments/assets/425c85c0-09ef-4d21-a4af-163779ede0e8)
## INSTALACIÓN
### Empecé creando el proyecto con el comando npx create-react filmspot
### una vez creado dividí los componentes en dos carpetas: components y helpers
### Componentes tendremos el Buscador, crear, Editar, Listado
### Helpers guardar en el storage (la parte donde se almacenan los arrticulos que vayamos creando)
### ¿Que es un helper? es el metodo que nos ayuda a separar la logica o los procesos repetitivos que no tengan que ver en los componentes estrictos

## APP(componente principal del proyecto)
### Aqui hice un logo personalizado en la cabecera de la pagina, con su barra de navegación, luego hice una sección del contenido principal que es donde se mostrará el listado con su estado, de
### las peliculas que vayamos creando y una barra lateral donde tendremos un pequeño folumalrio donde creamos las peliculas, y por ultimo un pié de página
### <img width="662" height="743" alt="image" src="https://github.com/user-attachments/assets/ae2ead20-c4a2-42c7-888f-d6c88835224a" />
### <img width="482" height="341" alt="image" src="https://github.com/user-attachments/assets/6582bc5c-da3e-4f62-bc77-e13fa82d17a7" />

## Buscador
### Me permite buscar peliculas dentro de una lista en la barra del buscador en tiempo real, usamos dos estados locales, Busqueda que me almacena el texto creado por el ususario,
### noEncontrado indica si no hay resultados, cuando escribimos en en el campo de busqueda de listado de peliculas(listadoState) busca coincidencias por el titulo, si no tiene coincidencias, nos mostrará
### un mensaje de "No hay resultados" y recuperá la lista original desde localStorage(donde se guardan los datos creados por el ususario), actualiza la lista principal de películas(setListadoState)
### con los resultados filtrados
### <img width="677" height="677" alt="image" src="https://github.com/user-attachments/assets/c48946cd-3a3e-4b3a-8f66-4121432f4dd6" />

## Crear
### En este componente nos permite crear una nueva pelicula a la lista principal y la guardamos en localStorage del navegador, peliState almacena los datos de pelicula que se esta creado el usuario
### para esto cree un formulario que estubiese titulo y descripcion y un boton que guardara lo que escribimos, cuando lo pulsamos guardara el identificador(id), titulo y descricion  
### <img width="642" height="768" alt="image" src="https://github.com/user-attachments/assets/6fbc6e68-dcf5-4284-834d-0cca367123da" />

## Editar
### cuando vamos a la parte del artíuclo creado tenemos dos botones uno de borrar y otro de editar, en el de editar pulsamos y nos abrirá un pequeño formulario para modificar los datos que el usuario quiera cambiar, si se equivocó
### en algun dato, al enviar el formulario obtiene nuevos datos reemplazados, edita la lista usando el identificador id con findIndex, crea un nuevo objeto de peliculas con los datos actualizados, rreemplaza la peliucla antigua
### en el array por la nueva, estos datos los almacena el el localStorage, y el estado setListadoState se actualiza, y el formulario se cierra(setEditar(0)), este componente recibe los propr de peli,conseguirPeliculas,setEditar
### y setListadoState(linea 3 del componente editar)
### <img width="680" height="742" alt="image" src="https://github.com/user-attachments/assets/6a61e19e-ad79-44d1-960a-c0fc5013e412" />

## Listado
### Se muestran todos las listas creadas por el usuario una vez ya creadas en el componente crear, además se encarga del estado incial, aquí también añadimos el componente de editar y borrar, también el de cargando cuando se este ### resfrescando la página esperando 2 segundos, los componentes principales son editar, loading con su carga inicial setTImeOut espera sus 2 segundos y luego carga los componentes de peliculas que esten almacenadas en el 
### localStorage y usa la funcion de conseguirPeliculas, si hay peliculas las muestra y sino pondra un mensaje de "No hay peliculas para mostrar", la parte de editar ya la expico en el componente editar, y el comopnente borrar
### lo que hace es borrar la pelicula seleccionada por el ususario del localStorage, por ultimo los props que recibe son listadoState y setListadoState
### <img width="742" height="822" alt="image" src="https://github.com/user-attachments/assets/f86f5960-4c52-4847-b857-51159533eff9" />

## GuardarEnLocalStorage
### Aquí guardamos y almacenamos los datos que creamos del listado de peliculas en el navegador local, obtiene los datos los datos actuales en este y los convierte en un JSON a un array de javascript, si exite agrega el nuevo 
### elemento al array(editar), si no existe , crea un nuevo array con el elemento, guarda el array actualizado de nuevo en el localStorage en formato JSON y devuelve el elemento que se acaba de guardar
### <img width="885" height="567" alt="image" src="https://github.com/user-attachments/assets/6d960a93-dbe8-4554-b76c-c08981f47dc7" />

