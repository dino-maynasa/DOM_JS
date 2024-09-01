//recupera los id de los inputs
const colorRojo = document.getElementById('rojo');
const colorVerde = document.getElementById('verde');
const colorAzul = document.getElementById('azul');

//recuperando los id de las etiquetas p
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//recupera los valores de los inputs y las asigna a las variables
let rojo = colorRojo.value;
let  verde = colorVerde.value;
let azul = colorAzul.value;

//actualizando los colores en las etiquetas p
textoRojo.innerText=rojo;
textoVerde.innerText=verde;
textoAzul.innerText=azul;

//funcion para realizar las modificaciones de color
function actualizarColor(rojo, verde, azul) {
    //forma de poder reemplazar con las variables
    let colorRGB = `rgb(${rojo}, ${verde}, ${azul})`; 
    //actualizar el color de fondo
    document.body.style.backgroundColor=colorRGB;
}

//actualizar el input para rojo
colorRojo.addEventListener("change", (e)=>{
rojo = e.target.value;
actualizarColor(rojo, verde, azul);
});

//actualizar color verde
colorVerde.addEventListener("change", (e)=>{
    verde = e.target.value;
    actualizarColor(rojo, verde, azul);
});

//actualizar color azul
colorAzul.addEventListener("change", (e)=>{
    azul = e.target.value;
    actualizarColor(rojo, verde, azul);
});