

// funções

function mostrarNome() {
    console.log("ola seja bem vindo ao sistema!")

    console.log("Aprendendo Algoritimos!")
}

function gerarNumeroAleatorio() {
    return Math.random();
}

let numeroGerado = gerarNumeroAleatorio();

console.log("Numero Gerado foi " + numeroGerado);



function dataAtual() {
    const data = new Date();
    return data.getFullYear();
}

const data = dataAtual();
console.log(data);