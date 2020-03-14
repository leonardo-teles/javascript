//criando um array e atribuindo valores
var emails = [];
emails[0] = "joao@email.com";
emails[1] = "maria@email.com";

//acessando os valores do array
console.log("emails[0]", emails[0]);
console.log("emails[5]", emails[5]);

//criando e declarando ao mesmo tempo. Forma mais comum
var nomes = ["João", "Maria"];
console.log("Quantos nomes?", nomes.length);

//verificando comportamentos estranhos num array
nomes[4] = "José";
console.log("Quantas posições até José?", nomes.length);
console.log("nomes[3]", nomes[3]);