
// Array de objetos.
const alunos = [
    {
        nome: "Vinicius",
        idade: 20,
        cargo: "Frontend"
    },
    {
        nome: "Ana",
        idade: 30,
        cargo: "FullStack"
    },
    {
        nome: "Lucas"
        idade: 23,
        cargo: "RH"
    }
]


console.log(alunos[0].cargo)

alunos.forEach((aluno) => {
    console.log(`Aluno(a) ${aluno.nome}`);
    console.log(`Cargo Atual ${aluno.cargo}`);
})