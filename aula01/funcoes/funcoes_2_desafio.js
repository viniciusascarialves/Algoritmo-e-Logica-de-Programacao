
//funções com parametros

function mostrarNome(nome) {
    console.log(`Seja bem vindo ${nome} ao Sistema`)
}

// mostrarNome("Vinicius Alves")

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;

function calculoMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

const mediaVinicius = calculoMedia(nota1, nota2, nota3)

console.log(mediaVinicius);


const mediaFulano = calculoMedia(8, 10, 6);

console.log(mediaFulano)