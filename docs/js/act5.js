"use strict";

const $exer5 = document.getElementById("exer5");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer5.addEventListener("submit", (event) => {
  event.preventDefault();
  triple();
});

function triple() {
  const num1 = parseInt($exer5.numerotriple.value);
  const num2 = num1 * 3;

  alert(`El tiple de  ${num1}  Es  (${num2})`);
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

