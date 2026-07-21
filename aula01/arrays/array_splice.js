
// Splice:
/*
   Index (indice): A posição do array onde a operacao começará.
   Quantidade: O numero de elementos a serem removidos a partir daquela posição.
   elementos que deseja adicionar naquele index (opcional)
*/

//               0  1   2   3
const numeros = [1, 5, 20, 10];

numeros.slice(1, 1, 30);

//console.log(numeros);


const nomes = ["Lucas", "Ana", "Vinicius", "Maria"]

const resultado = nomes.splice(2, 1, "João", "Joaquina")


console.log(resultado)