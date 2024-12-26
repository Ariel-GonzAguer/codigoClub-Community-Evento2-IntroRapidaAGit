const boton = document.getElementById("botonJS");

function sayHello() {
  console.log('😎🏍️');
}

boton.addEventListener('click', () => {
  alert('Holas ✌🏼');
  sayHello();
  document.body.style.backgroundColor = 'teal';
  document.body.style.color = 'black';
});