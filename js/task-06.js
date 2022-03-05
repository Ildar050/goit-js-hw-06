const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = Number(input.dataset.length);
console.log(Number(input.dataset.length));
input.addEventListener("blur", (event) => {
  event.currentTarget.value.length === inputLength
    ? input.classList.add("valid")
    : input.classList.add("invalid");
});

