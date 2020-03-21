//por convenção, o objeto de uma função construtora começa com letra maiúscula
var Carro = function(nome, placa) {
	this.nome = nome;
	this.placa = placa;
	this.fabricante = "VW";
}

var fox = new Carro("Fox", "AAA-1111");
console.log("Fox", fox);