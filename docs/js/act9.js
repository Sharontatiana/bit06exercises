"use strict";

const $exer9 = document.getElementById("exer9");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer9.addEventListener("submit", (event) => {
  event.preventDefault();
  reducido5();
});

function reducido5() {
  const num1 = parseInt($exer9.reducido5.value);
  const num2 = num1 - 5;
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
