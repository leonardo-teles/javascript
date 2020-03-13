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

//acessando uma propriedade específica
console.log("Cidade que o João mora:", joao.endereco.cidade);

//alterando o valor de uma propriedade
joao.endereco.numero = 101;
console.log(joao);

//acessando uma propriedade inexistente -> undefined
console.log(joao.endereco.cep);

//acesso de forma dinâmica
console.log("Estado:", joao["endereco"]["estado"]);