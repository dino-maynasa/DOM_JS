//personalizar los estilos con css
const primmerTopping =  document.querySelector('.topping');
primmerTopping.style.backgroundColor = 'blue';
primmerTopping.style.color = 'yellow';
primmerTopping.style.textTransform = 'uppercase';
primmerTopping.style.fontFamily = 'arial';
primmerTopping.style.textDecoration = 'underline';

console.log(primmerTopping);
//acceder al texto

const listaDeToppings = document.getElementById('lista-toppings');
//acceder al texto retorna una cadena de caracteres
console.log(listaDeToppings.innerText);
//cambiar los contenidos a los textos
const titulo = document.getElementById('titulo');
titulo.innerHTML = 'Mis Toppings favoritos';
