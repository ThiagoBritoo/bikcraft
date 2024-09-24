// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const controls = event.currentTarget.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImagem(evento) {
  const img = evento.currentTarget;
  const media = matchMedia("(min-width: 600px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

galeria.forEach((imagem) => {
  imagem.addEventListener("click", trocarImagem);
});

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
