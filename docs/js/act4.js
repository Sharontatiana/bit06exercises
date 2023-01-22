"use strict";

const $exer4 = document.getElementById("exer4");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer4.addEventListener("submit", (event) => {
  event.preventDefault();
  doble();
});

function doble() {
  const num1 = parseInt($exer4.numerodoble.value);
  const num2 = num1 * 2;
  alert(`El doble de  ${num1}  Es  (${num2})`);
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
