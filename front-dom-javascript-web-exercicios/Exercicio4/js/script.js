const meuTitulo = document.querySelector(".meu-titulo");
const meuBotao = document.querySelector(".meu-botao");

let contador = 0;

meuBotao.addEventListener("click", () => {
  if (contador % 2 === 0) {
    meuTitulo.style.color = "red";
  } else {
    meuTitulo.style.color = "blue";
  }
  contador++;
});
