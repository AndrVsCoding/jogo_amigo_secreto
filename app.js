let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    let embaralhado = [...amigos];
    embaralhado.sort(() => Math.random() - 0.5);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < embaralhado.length; i++) {
        let amigo1 = embaralhado[i];
        let amigo2 = embaralhado[(i + 1) % embaralhado.length];
        let li = document.createElement("li");
        li.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(li);
    }
}

function sortearUmAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    alert(`O amigo sorteado é: ${amigoSorteado}`);
}

function limparTudo() {
    amigos = [];
    atualizarLista();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}