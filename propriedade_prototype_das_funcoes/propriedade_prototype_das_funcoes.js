var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	// this.fabricante = "VW";
}

Carro.prototype.fabricante = "VW";
Carro.prototype.ligar = function() {
	console.log("Ligando o carro...");
}

var fox = new Carro("Fox", "AAA-1111");
console.log("Fox", fox);

var gol = new Carro("Gol", "AAA-2222");
console.log("Gol", gol);

console.log("Fox.fabricante", fox.fabricante);
console.log("Gol.fabricante", gol.fabricante);

fox.ligar();