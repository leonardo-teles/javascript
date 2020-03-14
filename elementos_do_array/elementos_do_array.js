//misturando e definindo tipos de dados diferentes em um array

//objeto
var acessorio = { som: "Pionner", banco: "Couro" };

//função
var ligar = function(a) {
	console.log("Ligando o carro...", a);
}


var fox = [ "Fox", 4, acessorio, ligar ];
console.log(fox);

//exibindo a propriedade do objeto dentro do array
console.log(fox[2].som);

//executando a função
fox[3]("agora!");