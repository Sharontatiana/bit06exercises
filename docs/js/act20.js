"use strict";
const $exer20 = document.getElementById("exer20");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer20.addEventListener("submit", (event) => {
  event.preventDefault();
  resultado();
});

function resultado() {
  const num1 = parseInt($exer20.num1.value);
  const num2 = parseInt($exer20.num2.value);
  const operacion = $exer20.operacion.value;
  switch (operacion) {
    case "sumar":
      alert(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "restar":
      alert(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "multiplicar":
      alert(`${num1} x ${num2} = ${num1 * num2}`);
      break;
    case "dividir":
      alert(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      alert(`La operación "${operacion}" no existe en esta función.`);
      break;
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
