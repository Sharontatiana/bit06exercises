"use strict";
const $exer3 = document.getElementById("exer3");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer3.addEventListener("submit", (event) => {
  event.preventDefault();
  multiplosDeDos();
});

function multiplosDeDos() {
  const num1 = parseInt($exer3.numeropar.value);
  let pares = "";
  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      pares += i + ", ";
    }
  }
  alert(`los numeros pares desde 1 hasta ${num1} Son ( ${pares} )`);
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
