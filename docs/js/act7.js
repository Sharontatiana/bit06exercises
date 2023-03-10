"use strict";

const $exer7 = document.getElementById("exer7");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer7.addEventListener("submit", (event) => {
  event.preventDefault();
  mitadTriple();
});

function mitadTriple() {
  const num1 = parseInt($exer7.numtriple.value);
  const num2 = num1 / 3;
  alert(`El valor de  ${num1}  Es  (${num2})`);
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
