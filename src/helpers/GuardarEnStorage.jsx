export const GuardarEnStorage = (clave, elemento) => {
  //conseguir los elementos que ya tenemos en el storage
  // localStorage.setItem("pelis", JSON.stringify([peli]));
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log(elementos);
  //parse convierte a un objeto Javascript utilizable

  //comprobar si es el array
  if (Array.isArray(elementos)) {
    //guardar dentro del array y añadir un elemento nuevo
    elementos.push(elemento);
    //push añade un elemento al array
  } else {
    //crea un array en la nueva lista elemento
    elementos = [elemento];
  }
  console.log(elementos);
  //Guaradar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //Devolver objeto Guardado
  return elemento;
};
