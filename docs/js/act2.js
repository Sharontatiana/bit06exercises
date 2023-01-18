"use strict";

const exer2 = document.getElementById("exer2");
const edad = document.getElementById("edad");

exer2.addEventListener("submit", (Event) => {
  Event.preventDefault();

  Number(exer2.age.value) >= 18
    ? (edad.innerHTML = "Si, Eres Mayor de Edad")
    : (edad.innerHTML = "No, Eres Mayor de Edad");
});
