"use strict";

const $exer12 = document.getElementById("exer12");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer12.addEventListener("submit", (event) => {
  event.preventDefault();
  parOImpar();
});

function parOImpar() {
  const num1 = parseInt($exer12.num.value);
  if (num1 === 0) {
    alert("El numero " + num1 + " es cero.");
  } else if (num1 % 2 === 0) {
    alert("El numero " + num1 + " es un número par.");
  } else {
    alert("El numero " + num1 + " es un número impar.");
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
