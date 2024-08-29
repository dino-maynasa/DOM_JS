//recupera los valores de l aetiqueta a
const enlaces = document.getElementsByTagName('a');
//imprime los valores
console.log(enlaces);
//muestra los valores de href
console.log(enlaces[0].getAttribute('href')); 
//remueve los valores de href dentro de la etiqueta a
console.log(enlaces[0].removeAttribute('href'));
//modifica los valores de la href
enlaces[0].setAttribute('href', 'https://www.youtube.com/watch?v=a9jxNusr0tE&list=PL1qFGl1PVt7Jx8Oi1r-o3sHns89uN1nYg&index=3');

const styles = document.querySelectorAll('.fondo-naranja');
console.log(styles[0].innerHTML);
console.log(styles[1].innerHTML);

const valor = document.getElementsByClassName('fondo-naranja');
console.log(valor[1].innerHTML);
