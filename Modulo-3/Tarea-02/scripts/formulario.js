let botonEnviar = document.getElementById("enviar")
//acontinuación como no utilicé onclick debo:
botonEnviar.addEventListener("click", capturarDatos)

function capturarDatos(){//esta funcion que creé capturará los datos que pedí en el formulario
    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("email").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let comment = document.getElementById("comments").value

    console.log(nombre, correo, telefono, direccion, comment)
    guardarLs(nombre, correo, telefono, direccion, comment) //creo la función abajo y acá la llamo para que me guarde estos datos en el localStorage

}

//trabajamos el formulario y prevenir cualquier error en el mismo
/*let form = document.getElementById("form")

form.addEventListener("submit", Formulario())

function Formulario(e){
    e.preventDefault();
}*/

//Ahora se guardará en el localStorage

function guardarLs(nom, corr, tel, direc, comm){
    localStorage.setItem("Nombre", nom) //envio los datos al localstorage con el parámetro .setItem
    localStorage.setItem("Correo", corr)
    localStorage.setItem("Telefono", tel)
    localStorage.setItem("Direccion", direc)
    localStorage.setItem("Comentario", comm)

    listarD();

}

//Ahora para traer los datos
let listar = document.getElementById("listarDatos")

function listarD(){
    let nomMostrar = localStorage.getItem("Nombre")
    let corrMostrar = localStorage.getItem("Correo")
    let telMostrar = localStorage.getItem("Telefono")
    let dirMostrar = localStorage.getItem("Direccion")
    let comMostrar = localStorage.getItem("Comentario")

    listar.innerHTML += `
    <table>
    <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Telefono</th>
        <th>Dirección</th>
        <th>Comentario</th>
    </tr>
    <tr>
    <th>${nomMostrar}</th>
    <th>${corrMostrar}</th>
    <th>${telMostrar}</th>
    <th>${dirMostrar}</th>
    <th>${comMostrar}</th>
   
</tr>
</table>
    `

}

