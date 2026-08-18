
// FILTER
 const numeros = [1, 5, 10, 30, 230];

 const numerosFiltrados = numeros.filter((numero) => {
     
    if (numero >= 10) {
        return numero
    }
 })

 //console.log(numeros);
 //console.log("=======")
 //console.log(numerosFiltrados)

 const nomes = ["gato", "cachorro", "elefante", "peixe", "leao", "Vinicius"];

 const filtro = nomes.filter((nome) => {
    if (nome.length > 5) {
        return nome
    }
 })

 //console.log(filtro);
 //console.log(nomes);



 // - FIND
 const alunos = ["Matheus", "Lucas", "Henrique"]

 const BuscaNome = alunos.find((aluno, index) => {
    if (aluno === "Henrique") {
        console.log("O Henrique esta na posicao " + index)
        return aluno;
    }
 })

 console.log(BuscaNome)