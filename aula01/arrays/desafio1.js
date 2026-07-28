/*
## Desafio 1 -
-> Crie uma array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile")

-> Você precisa remover o cargo "backend" da lista de cargos pois ese cargo não esta mais disponivel na empresa
*/


// 1 Montar a lista
// 2 encontrar onde esta o "backend"
// 3 remover este cargo da lista


const cargos = ["fullstack", "frontend", "backend", "mobile"];


const posicaoBackend = cargos.indexOf("backend")

if (posicaoBackend !== -1) {
    cargos.splice(posicaoBackend, 1)
    console.log("Removendo o cargo backend, ele esta na posicao: " + posicaoBackend)
    console.log(cargos);
    return;
}

if (posicaoBackend === -1) {
    console.log("Esse item nao foi encontrado na lista de cargos!")
    console.log(cargos);
}