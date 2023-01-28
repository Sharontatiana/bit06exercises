const $exer26 = document.getElementById("exer26");
const $anuncio = document.getElementById("anuncio");

$exer26.addEventListener("submit", (event) => {
  event.preventDefault();
  verificarDatos();
});

function verificarDatos() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  if (name === "pepita" && age >= 18) {
    $anuncio.innerHTML = `Por favor ingresa a la sala #1`;
  } else if (name === "pepita" && age <= 18) {
    $anuncio.innerHTML = `Por favor ingresa a la sala #2`;
  } else if (name != "pepita" && age >= 18) {
    $anuncio.innerHTML = `Por favor ingresa a la sala #3`;
  } else {
    $anuncio.innerHTML = `Por favor ingresa a la sala #4`;
  }
}
