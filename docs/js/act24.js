const $exer24 = document.getElementById("exer24");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

$exer24.addEventListener("submit", (event) => {
  event.preventDefault();
  multiplosde3();
});

function multiplosde3() {
  const num = parseInt($exer24.num.value);

  let i = 1;
  while (i <= num) {
    if (i % 3 === 0) {
    }
    i++;
  }
  alert(`Los muliplos de 3 son:  ${i} `);
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
