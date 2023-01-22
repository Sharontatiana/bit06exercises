const $exer22 = document.getElementById("exer22");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer22.addEventListener("submit", (event) => {
  event.preventDefault();
  sumaTotalDelosPares();
});

function sumaTotalDelosPares() {
  const num = parseInt($exer22.num.value);

  let resultado = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      resultado = resultado + i;
    }
  }

  alert("La suma total de los pares es: " + resultado);
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
