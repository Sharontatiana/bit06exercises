"use strict";
const $exer18 = document.getElementById("exer18");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer18.addEventListener("submit", (event) => {
  event.preventDefault();
  reciduo();
});

function reciduo() {
  const num1 = parseInt($exer18.num1.value);
  const num2 = parseInt($exer18.num2.value);
  const resultado = num1 % num2;
  alert(`El resultado ${resultado} `);
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
