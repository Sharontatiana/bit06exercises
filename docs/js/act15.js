"use strict";
const $exer15 = document.getElementById("exer15");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer15.addEventListener("submit", (event) => {
  event.preventDefault();
  restar();
});

function restar() {
  const num1 = parseInt($exer15.num1.value);
  const num2 = parseInt($exer15.num2.value);
  alert(`El resultado ${num1 - num2} `);
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
