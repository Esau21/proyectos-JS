const colores = ["red", "green", "yellow", "rgba(123, 231, 331)"];

const Btn = document.getElementById("Btn");
const texto = document.querySelector(".text");

Btn.addEventListener("click", function () {
  const change = colores[getChangeColors()];
  console.log(change);

  texto.textContent = change;
  document.body.style.backgroundColor = change;
});

function getChangeColors() {
  return Math.floor(Math.random() * colores.length);
}
