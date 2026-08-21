/*
# Crie um algoritmo de pilha.
- Deverá ter a função para retornar o tamanho da pilha.
- Função para adicionar um elemento na pilha.
- Função para retornar qual é o último elemento da pilha.
- Função para remover o último elemento da pilha e retonar qual foi o elemento removido.
- Função para limpar a pilha e zerar ela.
*/

function criarPilha() {
    let elementos = [];

    function adicionar(elemento) {
        elementos.push(elemento)
    }

    function tamanho() {
        return elementos.length;
    }

    return {
        adicionar
        tamanho
    }
}

let pilha = criarPilha();

pilha.adicionar(10);
pilha.adicionar(20);

console.log(`O tamanho da pilha e ${pilha.tamanho()}`)
