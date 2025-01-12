const botaoAdicionar = document.getElementById("enviar");
const campoInput = document.getElementById("items");
const listaValores = document.querySelector("#listaDeCompras");

function adicionarLista() {
  botaoAdicionar.addEventListener("click", clickar);
}

function clickar(event) {
  event.preventDefault();
  const novoItem = campoInput.value;

  if (novoItem!=="") {
    const novoItemLista = document.createElement("li");
    novoItemLista.textContent = novoItem;
    listaValores.appendChild(novoItemLista);
    campoInput.value = "";
    console.log ("botão clicado!")
  }
}
adicionarLista();
