const boton = document.getElementById("botonJS");

function sayHello() {
  console.log("Hola desde acá ⌨️");
}

boton.addEventListener("click", () => {
  alert("nada");
  sayHello();
  document.body.style.backgroundColor = "teal";
  document.body.style.color = "black";
});
