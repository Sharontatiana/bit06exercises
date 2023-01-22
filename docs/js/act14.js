"use strict";
const $exer14 = document.getElementById("exer14");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer14.addEventListener("submit", (event) => {
  event.preventDefault();
  sumar();
});

function sumar() {
  const num1 = parseInt($exer14.num1.value);
  const num2 = parseInt($exer14.num2.value);
  alert(`El resultado ${num1 + num2} `);
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
