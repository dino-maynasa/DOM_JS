//
console.log('==========getElementById======================');
const contenedor = document.getElementById('contenedor');
console.log( typeof contenedor.innerHTML);
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log('============getElementByClassName====================');
//document.getElementByClassName()
const toppings = document.getElementsByClassName('topping');
console.log(toppings[0]);
console.log('=============getElementByTagName================');
//document.getElementByTagName('');
const misToppings = document.getElementsByTagName('li');
console.log(misToppings);
console.log('=============document.querySelector========');
//busca el primer elemento buscado
const aceitunas = document.querySelector('#aceitunas');
console.log( aceitunas);
//captura los primeros
const primerNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerNaranja);
//tipo de seleccion mas elaborada
const primerMarron  = document.querySelector(' ul .fondo-marron');
console.log(primerMarron);

//descartar elementos
const primerNoMarron = document.querySelector(' ul li:not(.fondo-marron');
console.log(primerNoMarron);

console.log('=======document.querySelectorAll=====');
//selecciona todas los elementos buscados de typo object 
const todosMarron = document.querySelectorAll('ul li.fondo-marron');
console.log(todosMarron);
console.log(typeof todosMarron);