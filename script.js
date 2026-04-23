function mostrarMensagem() {
    alert("Que bom te ver no meu diário de viagem! ✈️");
}

function mudarCor() {
    document.body.style.backgroundColor = "pink";

    let secoes = document.querySelectorAll("section");
    secoes.forEach(function(secao) {
        secao.style.backgroundColor = "pink";
    });

    let header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = "pink";
    }

    let footer = document.querySelector("footer");
    if (footer) {
        footer.style.backgroundColor = "pink";
    }
}

function modoEscuro() {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";

    let secoes = document.querySelectorAll("section");
    secoes.forEach(function(secao) {
        secao.style.backgroundColor = "#333";
        secao.style.color = "white";
    });

    let header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = "#111";
        header.style.color = "white";
    }

    let footer = document.querySelector("footer");
    if (footer) {
        footer.style.backgroundColor = "#111";
        footer.style.color = "white";
    }

    let saida = document.getElementById("saida");
    if (saida) {
        saida.style.color = "black";
    }
    let titulo = document.getElementById("tituloInteracoes");
    if (titulo) {
    titulo.style.color = "black";
    }

}

function voltarNormal() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    let secoes = document.querySelectorAll("section");
    secoes.forEach(function(secao) {
        secao.style.backgroundColor = "white";
        secao.style.color = "black";
    });

    let header = document.querySelector("header");
    if (header) {
        header.style.backgroundColor = "";
        header.style.color = "black";
    }

    let footer = document.querySelector("footer");
    if (footer) {
        footer.style.backgroundColor = "";
        footer.style.color = "black";
    }

    let saida = document.getElementById("saida");
    if (saida) {
        saida.style.color = "black";
    }

    let titulo = document.getElementById("tituloInteracoes");
    if (titulo) {
    titulo.style.color = "black";
    }
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    let saida = document.getElementById("saida");

    saida.innerHTML =
    "Bem-vindo(a), " + nome + "! Aproveite o diário 💖";

    saida.style.color = "black";
}