
//funções com parametros

function mostrarNome(nome) {
    console.log(`Seja bem vindo ${nome} ao Sistema`)
}

// mostrarNome("Vinicius Alves")

const nota1 = 8;
const nota2 = 10;
const nota3 = 7;
const nome = "Vinicius";

function calculoMedia(nota1, nota2, nota3, nome) {
    let media = (nota1 + nota2 + nota3) / 3;
    return `O aluno(a) ${nome} teve a media de ${media}`;
}

const mediaVinicius = calculoMedia(nota1, nota2, nota3, nome)

console.log(mediaVinicius);


const mediaFulano = calculoMedia(8, 10, 6, "Victoria");

console.log(mediaFulano)


// ============================================

/*
const valorCapital = 2000;
const taxaJuros = 0.03;
const totalPeriodo = 12;

const JurosFinal = valorCapital * taxaJuros * totalPeriodo;

console.log(`Juros no periodo de ${totalPeriodo} meses é de ${JurosFinal} reais`);
*/

function CalculadoraJuros(valorCapital, toralPeriodo) {
    const juros = 0.3; // 30%

    const JurosFinal = valorCapital * juros * toralPeriodo;
    console.log(`Juros no periudo de ${toralPeriodo} meses é de R$ ${JurosFinal} reais`)
}

CalculadoraJuros(2000, 12);