const primmerTopping = document.querySelectorAll('.topping');
//agrega una clase al primer li
primmerTopping[0].classList.add('clase-agregado');
console.log(primmerTopping[3].innerHTML);
//verifica si existe la clase en la cuarta li
const def = primmerTopping[3].classList.contains('fondo-naranja');
console.log(def);
//remueve una clase existente en el primer li
primmerTopping[0].classList.remove('clase-agregado');
//alternar una clase, si la clase existe, se elimina, si no existe la crea
primmerTopping[0].classList.toggle('clase-agregado123');
// reemplazar una clase por otra
primmerTopping[0].classList.replace('clase-agregado123', 'clase-agregado321');
console.log(primmerTopping[0]);

