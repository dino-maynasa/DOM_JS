let  citas = [
  { autor: 'Gabriel García Márquez', texto: 'No llores porque ya se terminó, sonríe porque sucedió.' },
  { autor: 'Jane Austen', texto: 'No hay encanto igual al de un libro que te atrapa.' },
  { autor: 'J.K. Rowling', texto: 'No necesitamos magia para cambiar el mundo, llevamos todo el poder que necesitamos dentro de nosotros mismos.' },
  { autor: 'George Orwell', texto: 'La libertad es el derecho de decirle a la gente lo que no quiere escuchar.' },
  { autor: 'Ernest Hemingway', texto: 'El hombre no está hecho para la derrota. Un hombre puede ser destruido pero no derrotado.' },
  { autor: 'Virginia Woolf', texto: 'No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.' },
  { autor: 'Leo Tolstoy', texto: 'Si buscas la perfección, nunca estarás contento.' },
  { autor: 'Emily Dickinson', texto: 'Para viajar lejos, no hay mejor nave que un libro.' },
  { autor: 'William Faulkner', texto: 'Nunca tengas miedo de levantar tu voz por la honestidad y la verdad y la compasión contra la injusticia.' },
  { autor: 'Mark Twain', texto: 'El secreto de salir adelante es empezar.' },
  { autor: 'F. Scott Fitzgerald', texto: 'Nunca confundas una sola derrota con una derrota final.' },
  { autor: 'Harper Lee', texto: 'Nunca entiendes realmente a una persona hasta que consideras las cosas desde su punto de vista.' },
  { autor: 'Oscar Wilde', texto: 'Sé tú mismo, los demás ya están ocupados.' },
  { autor: 'Toni Morrison', texto: 'Si hay un libro que quieres leer, pero no ha sido escrito todavía, entonces debes escribirlo.' },
  { autor: 'Ray Bradbury', texto: 'No tienes que quemar libros para destruir una cultura. Solo consigue que la gente deje de leerlos.' },
  { autor: 'Aldous Huxley', texto: 'Quizá la mayor lección de la historia es que nadie aprendió las lecciones de la historia.' },
  { autor: 'Margaret Atwood', texto: 'No puedes cambiar una historia ya escrita, pero puedes cambiar la historia que contarás.' },
  { autor: 'Herman Melville', texto: 'Es mejor fracasar en la originalidad que triunfar en la imitación.' },
  { autor: 'Franz Kafka', texto: 'La literatura es siempre una expedición a la verdad.' },
  { autor: 'Sylvia Plath', texto: 'Todo lo que escribo sale de una herida interior.' }
];

// Seleccionar los elementos HTML.
let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

// Para generar indices aleatorios.
function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  // Incluye el minimo pero no el maximo.
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// Seleccionar una cita aleatoria.
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

// Para seleccionar una cita de forma aleatoria
// cuando se inicia la aplicacion.
let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();

// Para cambiar la cita al hacer click en el boton.
botonElem.addEventListener('click', cambiarCita);

