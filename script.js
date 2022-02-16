let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

let contador = document.querySelector("#contador");
contador.innerHTML = "0 / 100";
function valorNome() {
  let txtNome = document.querySelector("#txtNome");

  if (nome.value.length >= 4) {
    txtNome.style.color = "#26733a";
    txtNome.innerHTML = "Nome ok ✔";
    nomeOk = true;
  } else {
    txtNome.style.color = "#732626";
    txtNome.innerHTML = "❌ Insira seu nome completo ";
  }
}
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    txtEmail.style.color = "#26733a";
    txtEmail.innerHTML = "E-mail ok ✔";
    emailOk = true;
  } else {
    txtEmail.style.color = "#732626";
    txtEmail.innerHTML = "E-mail inválido ❌";
    emailOk = false;
  }
}
function validaMensagem() {
  let txtMensagem = document.querySelector("#txtMensagem");

  contador.innerHTML = `${mensagem.value.length} / 100`;

  if (mensagem.value.length >= 100) {
    txtMensagem.innerHTML =
      "Sua mensagem é muito grande, digite no máximo 100 caracteres ❌";
    txtMensagem.style.color = "#732626";
    txtMensagem.style.display = "block";
  } else {
    txtMensagem.style.display = "none";
    mensagemOk = true;
  }
}
function enviar() {
  debugger;
  if (nomeOk == true && emailOk == true && mensagemOk == true) {
    alert("Recado enviado com sucesso!");
  } else {
    alert("Preencha o recado corretamente antes de enviar...");
  }
}

function count() {
  let contador = document.querySelector("#contador");
  contador.innerHTML = `${mensagem.value.length} / 144`;
}
