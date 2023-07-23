const url ="https://api.generadordni.es/v2/person/username";
const lista = document.querySelector("ul");

axios.get(url)
  .then((response) => {
    // manejar respuesta exitosa
    crearLista(response.data)
  })
  .catch((error) => {
    // manejar error
    console.log(error);
  })
  .finally(() =>{
    // siempre sera executado
  });

function crearLista (alumnos) {
    console.log(alumnos);

    for(let alumno of alumnos){
        console.log(alumno);
        lista.innerHTML +=   `<li class='list-group-item'>${alumno}</li>`;
    }
} 