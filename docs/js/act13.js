"use strict";

const $exer13 = document.getElementById("exer13");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer13.addEventListener("submit", (event) => {
  event.preventDefault();
  primoONo();
});

function primoONo() {
  const num1 = parseInt($exer13.num.value);
  if (num1 < 2) {
    alert("Error, debes ingresar un número mayor que 1");
  }
  let contador = 0;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      contador++;
    }
  }
  if (num1 === 2) {
    alert(`El número ${num1}, es primo`);
  } else {
    alert(`El número ${num1}, no es primo`);
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
