"use strict";

const $exer6 = document.getElementById("exer6");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer6.addEventListener("submit", (event) => {
  event.preventDefault();
  mitad();
});

function mitad() {
  const num1 = parseInt($exer6.nummitad.value);
  const num2 = num1 / 2;
  alert(`La mita de  ${num1}  Es  (${num2})`);
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
