const boton = document.querySelector('button');
const color = document.getElementById('color');
// generar color hexadecimal aleatorio
function generarColorAleatorio() {
//bosibles valores
let digitos = '0123456789ABCDEF';
let colorHex = '#';

for (let i = 0; i <6; i++) {
    let indiceAleatorio=Math.floor( Math.random()*16);
    colorHex += digitos[indiceAleatorio];
}
return colorHex;
}
//addEventListener
boton.addEventListener('click', () => { 
    let colorAleatorio = generarColorAleatorio();
    //actualizar el texto
    color.textContent = colorAleatorio;
    //actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});
