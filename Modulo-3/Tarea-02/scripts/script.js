import { apiHeroes } from "./dataHeroes.js"; //Lo resibo
const main = document.getElementById("main");


const peliculas = (apiHeroes)=>{
    main.innerHTML = ``

    apiHeroes.forEach(element => {
        const {nombre, puntuacion, imagen}  = element
        const pintarDiv = document.createElement("div")
        pintarDiv.classList.add("movie") 

    pintarDiv.innerHTML = `
    <img class="imagenH" src="${imagen}" alt="">
    <div class="movie-info">
        <h3>${nombre}</h3>
        <span class="green">10</span>
    </div>
    <div class="puntaje"> 
        <h3>puntaje</h3>
        ${puntuacion}
    </div>`

    main.appendChild(pintarDiv)
});
}
//llamado a pintar las tarjetas y le estoy pasando la api que quiero que pinte
peliculas(apiHeroes)

//funcion buscar
const form =document.getElementById("form")
form.addEventListener("submit", (e)=>{//le paso un evento. (e) es un parametro que se pasa para evitar todos los eventos que se puedan
    //presentar adicionales.Luego la funcion tipo flecha para señalar que es una funcion. 
    e.preventDefault(); //siempre siempre para prevenir errores de eventos

    const search = document.getElementById("search").value;

  const busqueda = apiHeroes.filter(heroe=>heroe.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //punto filter para buscar, se crea una función y se le asigna que los ponga en miniscula y los compare
  //llamo a las targetas que coincidieron con la busqueda
  peliculas(busqueda)

    
}) 

