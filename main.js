const botaoAdicionar = document.getElementById("enviar");
const campoInput = document.getElementById("items");
const listaValores = document.querySelector("#listaDeCompras");

function adicionarLista() {
  botaoAdicionar.addEventListener("click", clickar);
}

function clickar(event) {
  event.preventDefault();
  const novoItem = campoInput.value;

  if (novoItem !== "") {
    const novoItemLista = document.createElement("li");
    novoItemLista.textContent = novoItem;
    listaValores.appendChild(novoItemLista);
    novoItemLista.setAttribute("class", "item");
    campoInput.value = "";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    console.log('clicado')
  }
}, false);



adicionarLista();
