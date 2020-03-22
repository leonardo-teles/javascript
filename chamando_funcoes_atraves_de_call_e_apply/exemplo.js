function Carro(nome, placa) {
	this.nome = nome;
	this.placa = placa;
}

//forma mais comum
//var fox = new Carro("Fox", "AAA-1111");

var fox = {};
var gol = {};

//chamando a função através do 'call'
Carro.call(fox, "Fox", "AAA-1111");

//chamando a função através do apply
Carro.apply(gol, ["Gol", "AAA-2222"]);

console.log("Fox", fox);
console.log("Gol", gol);