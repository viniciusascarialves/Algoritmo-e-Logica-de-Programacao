
const pessoa = {
    nome: "Vinicius",
    idade: 18,
    cargo: "Frontend",
    saudacao: function () {
        console.log("Ola eu sou o Vinicius!")
    }
}


//console.log(pessoa);
//console.log(saudacao);

const calculos = {
    soma: function (numero1, numero2) {
        return numero1 + numero2
    },
    subtrair: function (numero1, numero2) {
        return numero1 - numero2;
    }
}


const resultadoSoma = calculos.soma(10, 20)
console.log(resultadoSoma);

const resultadoSubtracao = calculos.subtrair(30, 12)
console.log(resultadoSubtracao)