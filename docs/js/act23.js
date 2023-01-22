const $exer23 = document.getElementById("exer23");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer23.addEventListener("submit", (event) => {
  event.preventDefault();
  sumaTotalImpares();
});

function sumaTotalImpares() {
  const num = parseInt($exer23.num.value);

  let resultado = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      resultado = resultado + i;
    }
  }
  alert("La suma total de los Impares es: " + resultado);
}

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
