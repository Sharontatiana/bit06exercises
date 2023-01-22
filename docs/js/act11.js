"use strict";

const $exer11 = document.getElementById("exer11");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer11.addEventListener("submit", (event) => {
  event.preventDefault();
  positivoNegativo();
});

function positivoNegativo() {
  const num1 = parseInt($exer11.num.value);
  if (num1 === 0) {
    alert("Ingresó el número cero.");
  } else if (num1 < 0) {
    alert("Ingresó un número negativo.");
  } else {
    alert("Ingresó un número positivo.");
  }
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
