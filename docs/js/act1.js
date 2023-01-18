"use strict";

const exer1 = document.getElementById("exer1");
const saludo = document.getElementById("saludo");

exer1.addEventListener("submit", (Event) => {
  Event.preventDefault();
  saludo.innerHTML = `Hello, ${exer1.name.value}.`;
});


