let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let select3 = document.getElementById("select3");
let resultado = document.getElementById("resultado");
let botonVerificar = document.getElementById("BtnVerificar");

const clave1 = "911";
const clave2 = "714";

botonVerificar.addEventListener("click", function () {
  let valor1 = select1.value;
  let valor2 = select2.value;
  let valor3 = select3.value;
  let combinacion = valor1 + valor2 + valor3;
  if (combinacion === clave1) {
    resultado.textContent = "Password 1 es correcto";
    resultado.style.color = "green";
  } else if (combinacion === clave2) {
    resultado.textContent = "Password 2 es correcto";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Password incorrecto";
    resultado.style.color = "red";
  }
});
