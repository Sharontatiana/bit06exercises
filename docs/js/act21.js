"use strict";
const $exer21 = document.getElementById("exer21");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer21.addEventListener("submit", (event) => {
  event.preventDefault();
  sumaTotal();
});

function sumaTotal() {
  const num = parseInt($exer21.num.value);

  let resultado = 0;

  let i = 1;
  while (i <= num) {
    resultado += i;
    i++;
  }

  alert("La suma total es: " + resultado);
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
