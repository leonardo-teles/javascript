var fox = { cor: "prata", modelo: "Fox", fabricante: "VW" }

console.log("Fox", fox);
console.log(typeof fox);

console.log("Cor do Fox:", fox.cor);

//pintando o Fox
fox.cor = "branco"
console.log("Fox depois de pintado:", fox);

//outra maneira de acesso à propriedade do objeto
console.log("Modelo:", fox["modelo"]);

//adicionando propriedades ao objeto
fox.peso = 1100;
console.log(fox);

//retorna undefined quando a propriedade não existe no objeto
console.log("Potência", fox.potencia);

//definindo funções no objeto
fox.ligar = function() { 
	console.log("Ligando o carro") 
};

console.log(fox);
fox.ligar();

var celta = {
	cor: "branco",
	modelo: "celta",
	fabricante: "GM",
	ligar: function() {
		console.log("Ligando o carro");
	}
};

console.log("celta", celta);