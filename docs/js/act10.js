"use strict";

const $exer10 = document.getElementById("exer10");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer10.addEventListener("submit", (event) => {
  event.preventDefault();
  dobleMasCuatro();
});

function dobleMasCuatro() {
  const num1 = parseInt($exer10.num.value);
  const num2 = num1 * 2 + 4;
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
