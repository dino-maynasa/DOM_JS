//hacer referencia al elemento del dom a a agregar
const listaDeToppings = document.getElementById('lista-toppings');
//crear un elemento
const toppingNuevo = document.createElement('li');
//se esta agragando la clase
toppingNuevo.classList.add('fondo-marron', 'topping');
//agregando contenido para las li
toppingNuevo.innerText='Queso Extra';

//especificar donde agregar
listaDeToppings.append(toppingNuevo);

//remover un elemento
//toppingNuevo.remove();