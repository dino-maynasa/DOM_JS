//eventos del DOM
//evento: algo que ocurre en sitio web como resultado de la interaccion con el usuario
//o por otra causa como los cambios de estado del dispositivo o de la ventana

//llamar por el ID
const toppings = document.getElementsByClassName('topping');
const cebollas = document.getElementById('cebollas');
//evento Click
function mostrarClic(e){
    console.log(e.target.innerText);
}
//creando la asociacion addEventListener

//cebolla = element, 'clicl'=evento mostrarClic=funcion a llamar 
cebollas.addEventListener('click', mostrarClic);

//mostrando el contenido de cada elemento
for(let i = 0; i<= toppings.length; i++){
toppings[i].addEventListener('click', mostrarClic);
}

//ocupando la funcion flecha, arrow function
for(let i = 0; i <= toppings.length; i++){
    toppings[i].addEventListener('click', (e) =>{
        console.log(e.target.innerText);
    })
}