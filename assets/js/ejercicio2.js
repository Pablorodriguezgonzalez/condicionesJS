const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const resultado = document.getElementById("resultado");
const botonCalcular = document.getElementById("BtnCalcular");

botonCalcular.addEventListener("click", function () {
  const cantidad1 = parseInt(sticker1.value) || 0;
  const cantidad2 = parseInt(sticker2.value) || 0;
  const cantidad3 = parseInt(sticker3.value) || 0;
  const totalStickers = cantidad1 + cantidad2 + cantidad3;
  if (totalStickers <= 10) {
    resultado.textContent = `Llevas ${totalStickers} stickers`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Llevas demasiados stickers";
    resultado.style.color = "red";
  }
});
