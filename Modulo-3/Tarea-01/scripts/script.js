function cambiar() {


    let primerSeleccionador = document.getElementById("dropdown");
    //console.log(select1.value)en .value trae el valor que hemos elegido
    let primerValor = primerSeleccionador.value;//para poder manipular el valor del seleccionador
   
    let segundoSeleccionador = document.getElementById("dropdown2")
    let segundoValor = segundoSeleccionador.value;


    let ingresoDeMoneda = document.getElementById("ingresoMoneda");
    let ingresoValor = ingresoDeMoneda.value;

    if(ingresoValor<=0){
        let validar = document.getElementById("val");
        validar.className = "validacion";
        validar.innerText="Ingrese un valor válido";
    } else{
        let validar = document.getElementById("val");
        validar.className = "validacion ocultar";
    }

    let valorSalida = 0;

    if(primerValor ==  'Dolar' && segundoValor == 'Dolar'){
        valorSalida = ingresoValor;
    }
    if(primerValor ==  'Peso Colombiano' && segundoValor == 'Peso Colombiano'){
        valorSalida = ingresoValor;
    }
    if(primerValor ==  'Euro' && segundoValor == 'Euro'){
        valorSalida = ingresoValor;
    }
    if(primerValor ==  'Libra Esterlina' && segundoValor == 'Libra Esterlina'){
        valorSalida = ingresoValor;
    }
    if(primerValor ==  'Peso Mexicano' && segundoValor == 'Peso Mexicano'){
        valorSalida = ingresoValor;
    }
    
    if(primerValor ==  'Dolar' && segundoValor == 'Peso Colombiano'){
        valorSalida = ingresoValor * 4000;
    }
    if(primerValor ==  'Peso Colombiano' && segundoValor == 'Dolar'){
        valorSalida = ingresoValor / 4000;
    }
    if(primerValor ==  'Peso Colombiano' && segundoValor == 'Euro' ){
        valorSalida = ingresoValor / 4526;
    }
    if(primerValor ==  'Euro' && segundoValor == 'Peso Colombiano' ){
        valorSalida = ingresoValor * 4526;
    }
    if(primerValor ==  'Peso Colombiano' && segundoValor == 'Libra Esterlina' ){
        valorSalida = ingresoValor / 5349;
    }
    if(primerValor ==  'Libra Esterlina' && segundoValor == 'Peso Colombiano' ){
        valorSalida = ingresoValor * 5349;
    }
    if(primerValor ==  'Peso Colombiano' && segundoValor == 'Peso Mexicano' ){
        valorSalida = ingresoValor / 191;
    }
    if(primerValor ==  'Peso Mexicano' && segundoValor == 'Peso Colombiano' ){
        valorSalida = ingresoValor * 191;
    }
    if(primerValor ==  'Dolar' && segundoValor == 'Peso Mexicano' ){
        valorSalida = ingresoValor * 20.68;
    }
    if(primerValor ==  'Peso Mexicano' && segundoValor == 'Dolar' ){
        valorSalida = ingresoValor / 20.68;
    }
    if(primerValor ==  'Dolar' && segundoValor == 'Euro' ){
        valorSalida = ingresoValor  / 1.14;
    }
    if(primerValor == 'Euro'  && segundoValor == 'Dolar' ){
        valorSalida = ingresoValor  * 1.14;
    }
    if(primerValor ==  'Dolar' && segundoValor == 'Libra Esterlina'){
        valorSalida = ingresoValor  / 1.35;
    }
    if(primerValor == 'Libra Esterlina' && segundoValor == 'Dolar' ){
        valorSalida = ingresoValor  * 1.35;
    }

    if(primerValor ==  'Peso Mexicano' && segundoValor == 'Euro' ){
        valorSalida = ingresoValor / 23.67;
    }
    if(primerValor == 'Euro'  && segundoValor == 'Peso Mexicano' ){
        valorSalida = ingresoValor  * 23.67;
    }
    if(primerValor ==  'Peso Mexicano' && segundoValor == 'Libra Esterlina' ){
        valorSalida = ingresoValor / 27.98;
    }
    if(primerValor == 'Libra Esterlina' && segundoValor == 'Peso Mexicano' ){
        valorSalida = ingresoValor  * 27.67;
    }
    if(primerValor == 'Euro'  && segundoValor == 'Libra Esterlina' ){
        valorSalida = ingresoValor / 1.18;
    }
    if(primerValor == 'Libra Esterlina' && segundoValor == 'Euro'){
        valorSalida = ingresoValor  * 1.18;
    }


    document.getElementById("resultado").innerText = valorSalida;
}

const moneda = ['Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let seleccionarMoneda = document.getElementById("dropdown");//obtengo el select y lo asigno a una variable
let seleccionarMoneda2 = document.getElementById("dropdown2");//obtengo el select y lo asigno a una variable

const fragment = document.createDocumentFragment();
moneda.forEach((item, index, arr) => {
    console.log('[' + index + '] = ' + item);
    let option = document.createElement("option");//creo un elemento de tipo option
    option.setAttribute("value", item);
    option.innerText = item;
    fragment.appendChild(option);
   
});
seleccionarMoneda.appendChild(fragment);//agrego el option al select

const fragment2 = document.createDocumentFragment(); //crear fragmento de documento (contenedor, guarda las opciones antes de agregarlas al select)
moneda.forEach((item, index, arr) => {
    console.log('[' + index + '] = ' + item);
    let option = document.createElement("option");//creo un elemento de tipo option
    option.setAttribute("value", item);
    option.innerText = item;
    fragment2.appendChild(option);//se agregó al contenedor temporal
});
seleccionarMoneda2.appendChild(fragment2);//se agregó todas las opciones al tiempo



