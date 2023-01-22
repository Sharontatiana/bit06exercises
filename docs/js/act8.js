"use strict";
const $exer8 = document.getElementById("exer8");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer8.addEventListener("submit", (event) => {
  event.preventDefault();
  cuadrado();
});

function cuadrado() {
  const num1 = parseInt($exer8.cuadrado.value);
  const num2 = num1 * num1;
  alert(`El cuadrado de  ${num1}  Es  (${num2})`);
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
