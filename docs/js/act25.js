const $exer25 = document.getElementById("exer25");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer25.addEventListener("submit", (event) => {
  event.preventDefault();
  mostrar();
});

function mostrar() {
  const num = parseInt($exer25.num.value);
  for (let i = num; i > -1; i--) {
    alert(`El numero -> ${i} `);
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
