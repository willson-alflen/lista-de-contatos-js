const form = document.querySelector("#form-contato");
const inputNomeContato = document.querySelector("#nome-contato");
const inputTelContato = document.querySelector("#tel-contato");
const corpoTabela = document.querySelector("tbody");
const arrContatos = [];
const totalContatos = document.querySelector("#total-contatos");

let novaLinha = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inserirLinha();

  limparInputs();

  inserirTotalContatos();
});

function inserirLinha() {
  if (arrContatos.includes(inputNomeContato.value)) {
    alert(`Já existe um contato com esse nome!`);
  } else {
    arrContatos.push(inputNomeContato.value);

    let conteudoLinha = `
        <tr>
            <td>${inputNomeContato.value}</td>
            <td>${inputTelContato.value}</td>
        </tr>
    `;

    novaLinha += conteudoLinha;

    corpoTabela.innerHTML = novaLinha;
  }
}

function limparInputs() {
  inputNomeContato.value = "";
  inputTelContato.value = "";
}

function inserirTotalContatos() {
  let total = arrContatos.length;

  totalContatos.innerHTML = total;
}
