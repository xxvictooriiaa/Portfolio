// (2.0) Gera número aleatório de 0 a 99
let numeroSecreto = Math.floor(Math.random() * 100);
console.log("Número secreto:", numeroSecreto); // só pra debug

function verificar() {
  const valor = parseInt(document.getElementById("chute").value);
  const resultado = document.getElementById("resultado");

  // (2.0) Verificação com if
  if (valor === numeroSecreto) {
    resultado.textContent = "Parabéns  Veeyy";
    resultado.style.backgroundColor = "green";
    resultado.style.color = "white";
  } else if (valor < numeroSecreto) {
    resultado.textContent = "O número secreto é MAIOR!";
    resultado.style.backgroundColor = "red"; // (2.0) muda cor fundo
    resultado.style.color = "white";
  } else {
    resultado.textContent = "O número secreto é MENOR!";
    resultado.style.backgroundColor = "red";
    resultado.style.color = "white";
  }
}
