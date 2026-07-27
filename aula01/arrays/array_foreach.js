

// Includes verifica se existe o item no array e devolve verdadeiro ou falso

const nomes = ["Vinicius", "Lucas", "Ana", "Fulano"];
const verificaNome = nomes.includes("Fulano")

// foreach
const alunos = ["Matheus", "Vinicius", "Ana", "Maria"];



alunos.forEach((nome) => {
    console.log(`Bem vindo(a) ${nome}`)
})


const valores = [10, 500, 300];

valores.forEach((valor) => {
    const conta = valor + 150;
})