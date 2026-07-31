/*
## Desafio 2 -
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no colsole qual a posicao em que ele esse nome esta na sua lista.
-> Caso nao encontre esase nome mostre no console o nome procurado e efale que nao foi encontrada na lista
*/


const nomes = ["Alice", "Lucas", "Carol", "David"];

const nomeBuscado = "Henrique";
const posicaoNome = nomes.indexOf(nomeBuscado);

if (posicaoNome !== -1) {
    console.log(`O nome ${nomeBuscado} esta na posicao ${posicaoNome}`)
} else {
    console.log(`O ${nomeBuscado} nao foi encontrado nessa lista`)
}