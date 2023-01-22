"use strict";
const $exer17 = document.getElementById("exer17");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer17.addEventListener("submit", (event) => {
  event.preventDefault();
  multiplicar();
});

function multiplicar() {
  const num1 = parseInt($exer17.num1.value);
  const num2 = parseInt($exer17.num2.value);
  alert(`El resultado ${num1 / num2} `);
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