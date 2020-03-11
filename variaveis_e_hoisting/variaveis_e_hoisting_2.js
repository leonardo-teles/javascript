var percentualImposto = 0.15;

var totalImposto = valor * percentualImposto;

console.log("Total imposto a pagar", totalImposto); //saída -> NaN

var valor = 100;

//HOISTING - Levar todas as declarações para o topo do arquivo. Não as atribuições

/*
var percentualImposto, valor, totalImposto;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;

console.log("Total imposto a pagar", totalImposto);

valor = 100;
*/