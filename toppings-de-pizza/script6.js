//recorrer el dom
const listaDeToppings = document.getElementById('lista-toppings');
//accediendo a elementos padre
console.log(listaDeToppings.parentElement);
//accediendo a los elementos padre del padrev (abuelo de lista de toppings)
console.log(listaDeToppings.parentElement.parentElement.parentNode);
//accediendo a los elementos hijos de lista toppings
console.log(listaDeToppings.children); 
//accediendo a primer elemento 
console.log(listaDeToppings.firstElementChild);
//accediendo al ultimo elemento 
console.log(listaDeToppings.lastElementChild);
console.log('======================accediendo a elementos hermanos=========================');
//acceder a elemento hermano anterior
console.log(listaDeToppings.previousElementSibling);
//suguiente elemento hermano
console.log(listaDeToppings.nextElementSibling);
//para poder acceder  a los nodos hermanos anteriores
console.log(listaDeToppings.nextSibling);  //null por el tema de las identaciones
//para acceder a elementos hermanos despues
console.log(listaDeToppings.nextSibling); //null por las identaciones