var joao = {
	nome: "João",
	idade: 25,
	endereco: {
		logradouro: "Av.Brasil",
		numero: 100,
		complemento: "Apto 202",
		cidade: "Rio de Janeiro",
		estado: "RJ"
	}
};

console.log(joao);

//apagando uma propriedade do objeto
delete joao.idade;
console.log("->", joao);

//apagando de forma dinâmica
delete joao["endereco"].estado;
console.log("-->", joao);