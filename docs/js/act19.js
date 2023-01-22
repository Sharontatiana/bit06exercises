"use strict";
const $exer19 = document.getElementById("exer19");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer19.addEventListener("submit", (event) => {
  event.preventDefault();
  divicible();
});

function divicible() {
  const num1 = parseInt($exer19.num1.value);
  const num2 = parseInt($exer19.num2.value);
  const resultado = num1 % num2;
  if (resultado === 0) {
    alert(`${num1} SI es divisible por ${num2}`);
  } else {
    alert(`${num1} NO es divisible por ${num2}`);
  }
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
