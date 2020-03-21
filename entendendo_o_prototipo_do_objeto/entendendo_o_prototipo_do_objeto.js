var volks = {
	fabricante: "VW"
}

var fox = {
	nome: "Fox",
	placa: "AAA-1111",
	//3ª forma de fazer - menos usada
	__proto__: volks
}

//2ª forma de fazer - cria o objeto gol a partir do protótipo do objeto volks 
var gol = Object.create(volks);
gol.nome = "Gol";
gol.placa = "AAA-2222";

/*var gol = {
	nome: "Gol",
	placa: "AAA-2222"
}*/

console.log("Fox", fox);
console.log("Gol", gol);

//todo objeto em JS aponta para um protótipo de objeto chamado Object.prototype
console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol));

console.log("Fox.fabricante:", fox.fabricante);
console.log("Gol.fabricante:", gol.fabricante);

//mudando o apontamento do protótipo de um objeto para outro, não mais para o padrão(Object.prototype)

//1ª forma de fazer
Object.setPrototypeOf(fox, volks);
console.log("Fox.fabricante ->", fox.fabricante);

console.log("Gol.fabricante ->", gol.fabricante); 

//o objeto que herdou não exibe a propriedade do herdade, mesmo a possuíndo
console.log("toString do Fox", fox);