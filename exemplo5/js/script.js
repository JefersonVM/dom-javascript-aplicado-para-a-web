const input = document.querySelector("input");



const successMessage = document.querySelector(".success");
const button = document.querySelector("button");

button.onclick = function () {
  successMessage.style.display = "block";

  if (!input.value) {
    successMessage.textContent = "Por favor, preencha o campo!";
    return;
  }


  successMessage.textContent = `O usuário ${input.value} foi cadastrado com sucesso!`;
  input.value = "";
};
