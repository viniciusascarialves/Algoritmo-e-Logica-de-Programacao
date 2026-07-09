
// J = P * i * n
/*
J = Juros;
P Valor presente, principal (capital);
i Taxa de juros; 8.03 = 3%
n Número de períodos (meses);
*/

const valorCapital = 2000;
const taxaJuros = 0.03;
const totalPeriodo = 12;

const JurosFinal = valorCapital * taxaJuros * totalPeriodo;

console.log(`Juros no periodo de ${totalPeriodo} meses é de ${JurosFinal} reais`);