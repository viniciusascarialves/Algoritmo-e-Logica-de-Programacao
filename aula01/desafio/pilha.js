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

    function pilhaEstavaVazia() {
        return elementos.length === 0;
    }

    function tamanho() {
        if (pilhaEstavaVazia()) {
            return "A pilha esta vazia"
        }

        return elementos.length;
    }

    function topoPilha(){
        if(pilhaEstavaVazia()){
            return "A pilha esta vazia"
        }

        return elementos[elementos.length -1]

    }

    return {
        adicionar,
        tamanho,
        pilhaEstavaVazia,
        topoPilha
    }
}

let pilha = criarPilha();

pilha.adicionar(10);
pilha.adicionar(20);
console.log(`O ultimo elemento da pilha e ${pilha.topoPilha()}`)

console.log(`O tamanho da pilha e ${pilha.tamanho()}`)
